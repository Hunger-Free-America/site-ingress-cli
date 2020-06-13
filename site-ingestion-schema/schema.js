module.exports.dataSchema = {
    id: '/dataSchema',
    type: 'object',
    properties: {
        siteName: { type: 'string', minLength: 3, maxLength: 174 },
        siteStreetAddress: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 183 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteCity: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 183 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteState: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2, maxLength: 2 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteZip: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 4, maxLength: 10 },
                { maxLength: 0 },
                { const: '601' }
            ]},
            else: { type: null }
        },
        siteCountry: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteCounty: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteNeighborhood: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 183 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteType: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        siteSubType: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        lat: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        lng: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2, maxLength: 74 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        EFROID: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2, maxLength: 10 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        publicContactMethod: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 174 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        publicPhone: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 7, maxLength: 174 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        publicEmail: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 6, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        website: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 4, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        socialMedia: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        contactName: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        contactPhone: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 7, maxLength: 174 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        contactEmail: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 6, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        status: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 4, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        publicOpenness: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        deliveryEligibility: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        eligibilityRequirements: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hoursEligibility1: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hours1: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hoursEligibility2: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hours2: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hoursEligibility3: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hours3: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        validUntil: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        acceptsFoodDonations: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        hasEnoughFood: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        canReceiveBulk: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        foodNeeds: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        hasBabyFormula: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        staffVolunteerNeeds: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        recruitingAssistance: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        otherNeeds: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        covidChanges: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        increasedDemandCauses: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        totalFoodCommunityNeeds: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        currentCapacity: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        staffVolunteerReduction: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        safetyPrecautions: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        languages: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 2 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        nearbyFoodPrograms: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        notesGovRequests: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        notesAnythingElse: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        },
        stockStatus: {
            anyOf: [{ type: 'string' }, { type: null }]
        },
        reminderMethod: {
            if: { type: 'string' },
            then: { anyOf: [
                { minLength: 3, maxLength: 255 },
                { maxLength: 0 }
            ]},
            else: { type: null }
        }
    },

    // accept address in any of the following forms
    // TODO: add state validation
    anyOf: [
        {
            properties: {
                siteStreetAddress: { minLength: 3, maxLength: 183 }
            }
        },
        {
            properties: {
                siteZip: { anyOf: [
                    { minLength: 4, maxLength: 10 },
                    { const: '601' }
                ]}
            }
        },
        {
            properties: {
                siteCity: { minLength: 3, maxLength: 183 },
                siteState: { minLength: 2, maxLength: 2 }
            }
        }
    ],
    throwError: false
};

module.exports.detailsSchema = {
    id: '/detailsSchema',
    type: 'object',
    properties: this.dataSchema.properties,

    // checks if any details fields exist
    anyOf: [
        {
            properties: {
                publicContactMethod: { minLength: 3, maxLength: 174 }
            }
        },
        {
            properties: {
                publicPhone: { minLength: 7, maxLength: 174 }
            }
        },
        {
            properties: {
                publicEmail: { minLength: 6, maxLength: 255 }
            }
        },
        {
            properties: {
                website: { minLength: 4, maxLength: 255 }
            }
        },
        {
            properties: {
                socialMedia: { minLength: 3, maxLength: 255 }
            }
        },
        {
            properties: {
                contactName: { minLength: 3, maxLength: 255 }
            }
        },
        {
            properties: {
                contactPhone: { minLength: 7, maxLength: 174 }
            }
        },
        {
            properties: {
                contactEmail: { minLength: 6, maxLength: 255 }
            }
        },
        {
            properties: {
                status: { minLength: 4, maxLength: 255 }
            }
        },
        {
            properties: {
                publicOpenness: { minLength: 3, maxLength: 255 }
            }
        },
        {
            properties: {
                deliveryEligibility: { minLength: 3 }
            }
        },
        {
            properties: {
                eligibilityRequirements: { minLength: 3 }
            }
        },
        {
            properties: {
                hoursEligibility1: { minLength: 3 }
            }
        },
        {
            properties: {
                hours1: { minLength: 3 }
            }
        },
        {
            properties: {
                hoursEligibility2: { minLength: 3 }
            }
        },
        {
            properties: {
                hours2: { minLength: 3 }
            }
        },
        {
            properties: {
                hoursEligibility3: { minLength: 3 }
            }
        },
        {
            properties: {
                hours3: { minLength: 3 }
            }
        },
        {
            properties: {
                validUntil: { minLength: 3 }
            }
        },
        {
            properties: {
                acceptsFoodDonations: { minLength: 1 }
            }
        },
        {
            properties: {
                hasEnoughFood: { minLength: 1 }
            }
        },
        {
            properties: {
                canReceiveBulk: { minLength: 1 }
            }
        },
        {
            properties: {
                foodNeeds: { minLength: 3 }
            }
        },
        {
            properties: {
                hasBabyFormula: { minLength: 1 }
            }
        },
        {
            properties: {
                staffVolunteerNeeds: { minLength: 1 }
            }
        },
        {
            properties: {
                recruitingAssistance: { minLength: 3 }
            }
        },
        {
            properties: {
                otherNeeds: { minLength: 3 }
            }
        },
        {
            properties: {
                covidChanges: { minLength: 3 }
            }
        },
        {
            properties: {
                increasedDemandCauses: { minLength: 3 }
            }
        },
        {
            properties: {
                totalFoodCommunityNeeds: { minLength: 3 }
            }
        },
        {
            properties: {
                currentCapacity: { minLength: 2 }
            }
        },
        {
            properties: {
                staffVolunteerReduction: { minLength: 1 }
            }
        },
        {
            properties: {
                safetyPrecautions: { minLength: 3 }
            }
        },
        {
            properties: {
                languages: { minLength: 2 }
            }
        },
        {
            properties: {
                nearbyFoodPrograms: { minLength: 3 }
            }
        },
        {
            properties: {
                notesGovRequests: { minLength: 3 }
            }
        },
        {
            properties: {
                notesAnythingElse: { minLength: 3 }
            }
        },
        {
            properties: {
                stockStatus: { minLength: 1 }
            }
        },
        {
            properties: {
                reminderMethod: { minLength: 3, maxLength: 255 }
            }
        }
    ],
    throwError: false
};

module.exports.populateSiteFields = (site, fromEmail, updateMethod) => {
    return {
        fields: {
            uploadedBy: { email: fromEmail },
            siteName: site.siteName,
            EFROID: site.EFROID,
            siteStreetAddress: site.siteStreetAddress,
            siteCity: site.siteCity,
            siteState: site.siteState,
            siteZip: site.siteZip,
            siteCountry: site.siteCountry,
            siteCounty: site.siteCounty,
            siteNeighborhood: site.siteNeighborhood,
            siteType: site.siteType,
            siteSubType: site.siteSubType,
            lat: site.lat,
            lng: site.lng,
            createdMethod: updateMethod
        }
    };
};

module.exports.populateDetailsFields = (site, id, fromEmail, updateMethod) => {
    return {
        fields: {
            Site: [id],
            uploadedBy: { email: fromEmail },
            status: site.status,
            contactName: site.contactName,
            contactPhone: site.contactPhone,
            contactEmail: site.contactEmail,
            publicOpenness: site.publicOpenness,
            deliveryEligibility: site.deliveryEligibility,
            eligibilityRequirements: site.eligibilityRequirements,
            hoursEligibility1: site.hoursEligibility1,
            hours1: site.hours1,
            hoursEligibility2: site.hoursEligibility2,
            hours2: site.hours2,
            hoursEligibility3: site.hoursEligibility3,
            hours3: site.hours3,
            validUntil: site.validUntil,
            acceptsFoodDonations: site.acceptsFoodDonations,
            hasEnoughFood: site.hasEnoughFood,
            canReceiveBulk: site.canReceiveBulk,
            foodNeeds: site.foodNeeds,
            hasBabyFormula: site.hasBabyFormula,
            staffVolunteerNeeds: site.staffVolunteerNeeds,
            recruitingAssistance: site.recruitingAssistance,
            otherNeeds: site.otherNeeds,
            publicContactMethod: site.publicContactMethod,
            publicPhone: site.publicPhone,
            publicEmail: site.publicEmail,
            website: site.website,
            socialMedia: site.socialMedia,
            covidChanges: site.covidChanges,
            increasedDemandCauses: site.increasedDemandCauses,
            totalFoodCommunityNeeds: site.totalFoodCommunityNeeds,
            currentCapacity: site.currentCapacity,
            staffVolunteerReduction: site.staffVolunteerReduction,
            safetyPrecautions: site.safetyPrecautions,
            languages: site.languages,
            nearbyFoodPrograms: site.nearbyFoodPrograms,
            notesGovRequests: site.notesGovRequests,
            notesAnythingElse: site.notesAnythingElse,
            createdMethod: updateMethod
        }
    };
};
