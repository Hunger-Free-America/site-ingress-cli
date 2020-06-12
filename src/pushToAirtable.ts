/**
 * Pushes data to Airtable Sites table, then push associated details to Site Details table.
 *
 * Dependant on password from CLI tool for /upload-site to not push the actual base rather than TEST.
 */

require('dotenv').config();
const Airtable = require('airtable');
const { populateSiteFields, populateDetailsFields } = require('../site-ingestion-schema/schema');
const { containsDetails } = require('../site-ingestion-schema/validator');
const updateMethod = 'Upload local.v0: github.com/COVID-basic-needs/site-local-frankenstein';

// same formula as the one in AirTable to generate the 'unique' site identifier
const getSiteID = (site) => {
    return `${site.siteName} - ${site.siteStreetAddress}, ${site.siteCity} ${site.siteState} ${`${site.siteZip}`}`
        .replace('\n', ' ');
};

module.exports = async (siteList, email, password) => {
    try {
        const base = new Airtable({
            apiKey: process.env.AIRTABLE_API_KEY
        }).base(password === process.env.PW ? process.env.AIRTABLE_BASE_ID : process.env.TEST_BASE_ID);

        const sitesTable = base(process.env.AIRTABLE_SITES_TABLE);
        const detailsTable = base(process.env.AIRTABLE_SITE_DETAILS);
        const dupedSiteDetails = [];
        const newSites = [];
        let preExistingSites = 0;
        let originalSites;

        console.log('Pulling sites table to check for pre-existing sites...');

        // returns an object with keys:siteIDs & values:airtableRecordIDs
        try {
            originalSites = await (await sitesTable.select({ fields: ['siteID'] }).all())
                .reduce((out, record) => {
                    out[record.fields.siteID] = record.id;
                    return out;
                }, {});
        } catch (err) {
            console.error('Error fetching current sites table');
            throw err;
        }

        console.log(`Fetched ${Object.keys(originalSites).length} rows from the sites table. Checking for pre-existing Sites...`);

        // filter out siteDetails corresponding to pre-existing sites to upload separately
        siteList.forEach((site) => {
            const siteID = getSiteID(site);
            if (originalSites[siteID]) {
                preExistingSites += 1;
                // on duplicate & non-empty details, add site details (with Site's record id) to dupedSiteDetails list
                if (containsDetails(site)) {
                    const details = populateDetailsFields(site, originalSites[siteID], email, updateMethod);
                    dupedSiteDetails.push(details);
                }
            } else {
                newSites.push(site);
            }
        });

        console.log(`Found ${preExistingSites} pre-existing (duplicate) Sites, and ${dupedSiteDetails.length} valid details for them. Uploading those details..`);

        // push details corresponded to duped sites
        for (let i = 0; i < dupedSiteDetails.length; i += 10) {
            const tenDupedSiteDetails = dupedSiteDetails.slice(i, i + 10 < dupedSiteDetails.length ? i + 10 : dupedSiteDetails.length);
            await detailsTable.create(tenDupedSiteDetails, { typecast: true });
        }

        console.log(`Created ${dupedSiteDetails.length} new details for pre-existing sites. Now creating new sites...`);

        // Airtable's create API only allows 10 at a time, so we batch.
        // (there is a rate limit, but their SDK has builtin retry logic so we should be safe)
        // UPDATE: the rate limit is an issue, switched to await inside the loop to slow it down.
        for (let i = 0; i < newSites.length; i += 10) {
            const tenSites = newSites.slice(i, i + 10 < newSites.length ? i + 10 : newSites.length);
            const tenSiteLocations = tenSites.map((site) => populateSiteFields(site, email, updateMethod));

            // Push 10 Sites to Airtable, save resultant Airtable record IDs for attaching siteDetails,
            // then populate & push siteDetails objects to Airtable
            await sitesTable.create(tenSiteLocations, { typecast: true }).then(async records => {
                try {
                    // create the 10 siteDetails objects with corresponding Site record IDs
                    const tenSiteDetails = records.reduce((out, record, i) => {
                        out.push(populateDetailsFields(tenSites[i], record.id, email, updateMethod));
                        return out;
                    }, []);

                    await detailsTable.create(tenSiteDetails, { typecast: true });
                } catch (err) {
                    console.error('Error creating siteDetails');
                    throw err;
                }
            });
        }

        console.log(`Created ${newSites.length} new Sites + new relevant details.`); // TODO: ADD REAL # DETAILS PUSHED HERE

    } catch (err) {
        console.error('Error in pushToAirtable');
        throw err;
    }
};
