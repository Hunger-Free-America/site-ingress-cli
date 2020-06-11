# Site Local Frankenstein

## An app for formatting and uploading Food Distribution Organization and Food-handout Site data dumps (i.e. `.CSV` & `.xlsx`) into the [National Free Food Data Collection Airtable](https://airtable.com/invite/l?inviteId=invgFbPkoS2sXfYoi&inviteToken=edaa3e00328ce2a8c0bf160c51210a071c06da6edb6b79e06773b6c1063bd325)

Three apps smashed together to accomplish basic site ingestion. It implements the pushToAirtable function which takes in a list of site JSON objects and batch pushes them to the Airtable.

This de-duplicates based on Site ID. When a match is found to an existing Site this formula pushes the relevant details to the Site Details table instead.

Site ID is defined as:

    const joined = `${site.siteName} - ${site.siteStreetAddress}, ${site.siteCity} ${site.siteState} ${site.siteZip + ""}`;

## Steps to get started

### 1. Install

Clone the repo, `cd` into it, & run `yarn install` to install dependencies.

### 2. Configure environment variables

    cp example.env .env

Fill out `.env` with your Airtable API key & main BASE_ID.

### 3. Fill out a FieldMap.yaml

Check for a `.yaml` fieldMap for the file to upload in `fieldMaps/`, add the file to an existing one, or create a new one from the EXAMPLE.yaml

### 4. Run it to add sites / site details

Run the CLI tool with `yarn start PATH_TO_YAML_FIELDMAP EMAIL PASSWORD(optional)`

## Examples

### Sample Data

    [
        {
            "siteName": "exampleSite",
            "siteStreetAddress": "123 Example St",
            "siteCity": "ExamplePolis",
            "siteCountry": "USA",
            "siteState": "ES",
            "siteZip": 98765,
            "contactName": "Mr. Example"
        }
    ]

### Sample Response

    {"message":"Added 1 new sites and 1 new site details"}

For sites with the same site ID, only a site detail entry will be made. If you run the above command, you will most likely see 0 new sites added.

## Schema

This expects an array of objects named `data` in the POST body. See `schema.js` for more information on the expected format of the data.

    {
        "siteName": { "type": "string" }, // REQUIRED
        "siteStreetAddress": { "type": "string" }, // REQUIRED
        "siteCity": { "type": "string" }, // REQUIRED
        "siteState": { "type": "string" }, // REQUIRED
        "siteZip": { "type": "integer" }, // REQUIRED
        "siteCountry": { "type": "string" }, // REQUIRED
        "siteCounty": { "type": "string" },
        "siteNeighborhood": { "type": "string" },
        "siteType": { "type": "string" },
        "siteSubType": { "type": "string" },
        "lat": { "type": "number" },
        "lng": { "type": "number" },
        "EFROID": { "type": "string" },
        "publicContactMethod": { "type": "string" },
        "publicPhone": { "type": "string" },
        "publicEmail": { "type": "string" },
        "website": { "type": "string" },
        "socialMedia": { "type": "string" },
        "contactName": { "type": "string" },
        "contactPhone": { "type": "string" },
        "contactEmail": { "type": "string" },
        "status": { "type": "string" },
        "publicOpenness": { "type": "string" },
        "deliveryEligibility": { "type": "string" },
        "eligibilityRequirements": { "type": "string" },
        "hoursEligibility1": { "type": "string" },
        "hours1": { "type": "string" },
        "hoursEligibility2": { "type": "string" },
        "hours2": { "type": "string" },
        "hoursEligibility3": { "type": "string" },
        "hours3": { "type": "string" },
        "validUntil": { "type": "string" },
        "acceptsFoodDonations": { "type": "string" },
        "hasEnoughFood": { "type": "string" },
        "canReceiveBulk": { "type": "string" },
        "foodNeeds": { "type": "string" },
        "hasBabyFormula": { "type": "string" },
        "staffVolunteerNeeds": { "type": "string" },
        "recruitingAssistance": { "type": "string" },
        "otherNeeds": { "type": "string" },
        "covidChanges": { "type": "string" },
        "increasedDemandCauses": { "type": "string" },
        "totalFoodCommunityNeeds": { "type": "string" },
        "currentCapacity": { "type": "string" },
        "staffVolunteerReduction": { "type": "string" },
        "safetyPrecautions": { "type": "string" },
        "languages": { "type": "string" },
        "nearbyFoodPrograms": { "type": "string" },
        "notesGovRequests": { "type": "string" },
        "notesAnythingElse": { "type": "string" },
        "stockStatus": { "type": "string" },
        "reminderMethod": { "type": "string" },
    }
