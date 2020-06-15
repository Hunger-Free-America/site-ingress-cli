module.exports.dataSchema = {
    id: '/dataSchema',
    type: 'object',
    properties: {
        siteName: { type: 'string', minLength: 3, maxLength: 174 }
    },
    required: ['siteName'],

    // accept address in any of the following forms
    // TODO: add state validation
    anyOf: [
        {
            properties: {
                siteStreetAddress: { type: 'string', minLength: 3, maxLength: 183 }
            },
            required: ['siteStreetAddress']
        },
        {
            properties: {
                siteZip: { type: 'string', minLength: 4, maxLength: 10 }
            },
            required: ['siteZip']
        },
        {
            properties: {
                siteCity: { type: 'string', minLength: 3, maxLength: 183 },
                siteState: { type: 'string', minLength: 2, maxLength: 2 }
            },
            required: ['siteCity', 'siteState']
        }
    ],
    throwError: false
};

module.exports.detailsSchema = {
    id: '/detailsSchema',
    type: 'object',
    properties: {
        siteName: { type: 'string', minLength: 3, maxLength: 174 }
    },
    required: ['siteName'],
    // checks if any details fields exist
    anyOf: [
        {
            properties: {
                publicContactMethod: { type: 'string', minLength: 3, maxLength: 174 }
            },
            required: ['publicContactMethod']
        },
        {
            properties: {
                publicPhone: { type: 'string', minLength: 7, maxLength: 174 }
            },
            required: ['publicPhone']
        },
        {
            properties: {
                publicEmail: { type: 'string', minLength: 6, maxLength: 255 }
            },
            required: ['publicEmail']
        },
        {
            properties: {
                website: { type: 'string', minLength: 4, maxLength: 255 }
            },
            required: ['website']
        },
        {
            properties: {
                socialMedia: { type: 'string', minLength: 3, maxLength: 255 }
            },
            required: ['socialMedia']
        },
        {
            properties: {
                contactName: { type: 'string', minLength: 3, maxLength: 255 }
            },
            required: ['contactName']
        },
        {
            properties: {
                contactPhone: { type: 'string', minLength: 7, maxLength: 174 }
            },
            required: ['contactPhone']
        },
        {
            properties: {
                contactEmail: { type: 'string', minLength: 6, maxLength: 255 }
            },
            required: ['contactEmail']
        },
        {
            properties: {
                status: { type: 'string', minLength: 4, maxLength: 255 }
            },
            required: ['status']
        },
        {
            properties: {
                publicOpenness: { type: 'string', minLength: 3, maxLength: 255 }
            },
            required: ['publicOpenness']
        },
        {
            properties: {
                deliveryEligibility: { type: 'string', minLength: 3 }
            },
            required: ['deliveryEligibility']
        },
        {
            properties: {
                eligibilityRequirements: { type: 'string', minLength: 3 }
            },
            required: ['eligibilityRequirements']
        },
        {
            properties: {
                hoursEligibility1: { type: 'string', minLength: 3 }
            },
            required: ['hoursEligibility1']
        },
        {
            properties: {
                hours1: { type: 'string', minLength: 3 }
            },
            required: ['hours1']
        },
        {
            properties: {
                hoursEligibility2: { type: 'string', minLength: 3 }
            },
            required: ['hoursEligibility2']
        },
        {
            properties: {
                hours2: { type: 'string', minLength: 3 }
            },
            required: ['hours2']
        },
        {
            properties: {
                hoursEligibility3: { type: 'string', minLength: 3 }
            },
            required: ['hoursEligibility3']
        },
        {
            properties: {
                hours3: { type: 'string', minLength: 3 }
            },
            required: ['hours3']
        },
        {
            properties: {
                validUntil: { type: 'string', minLength: 3 }
            },
            required: ['validUntil']
        },
        {
            properties: {
                acceptsFoodDonations: { type: 'string', minLength: 1 }
            },
            required: ['acceptsFoodDonations']
        },
        {
            properties: {
                hasEnoughFood: { type: 'string', minLength: 1 }
            },
            required: ['hasEnoughFood']
        },
        {
            properties: {
                canReceiveBulk: { type: 'string', minLength: 1 }
            },
            required: ['canReceiveBulk']
        },
        {
            properties: {
                foodNeeds: { type: 'string', minLength: 3 }
            },
            required: ['foodNeeds']
        },
        {
            properties: {
                hasBabyFormula: { type: 'string', minLength: 1 }
            },
            required: ['hasBabyFormula']
        },
        {
            properties: {
                staffVolunteerNeeds: { type: 'string', minLength: 1 }
            },
            required: ['staffVolunteerNeeds']
        },
        {
            properties: {
                recruitingAssistance: { type: 'string', minLength: 3 }
            },
            required: ['recruitingAssistance']
        },
        {
            properties: {
                otherNeeds: { type: 'string', minLength: 3 }
            },
            required: ['otherNeeds']
        },
        {
            properties: {
                covidChanges: { type: 'string', minLength: 3 }
            },
            required: ['covidChanges']
        },
        {
            properties: {
                increasedDemandCauses: { type: 'string', minLength: 3 }
            },
            required: ['increasedDemandCauses']
        },
        {
            properties: {
                totalFoodCommunityNeeds: { type: 'string', minLength: 3 }
            },
            required: ['totalFoodCommunityNeeds']
        },
        {
            properties: {
                currentCapacity: { type: 'string', minLength: 2 }
            },
            required: ['currentCapacity']
        },
        {
            properties: {
                staffVolunteerReduction: { type: 'string', minLength: 1 }
            },
            required: ['staffVolunteerReduction']
        },
        {
            properties: {
                safetyPrecautions: { type: 'string', minLength: 3 }
            },
            required: ['safetyPrecautions']
        },
        {
            properties: {
                languages: { type: 'string', minLength: 2 }
            },
            required: ['languages']
        },
        {
            properties: {
                nearbyFoodPrograms: { type: 'string', minLength: 3 }
            },
            required: ['nearbyFoodPrograms']
        },
        {
            properties: {
                notesGovRequests: { type: 'string', minLength: 3 }
            },
            required: ['notesGovRequests']
        },
        {
            properties: {
                notesAnythingElse: { type: 'string', minLength: 3 }
            },
            required: ['notesAnythingElse']
        },
        {
            properties: {
                stockStatus: { type: 'string', minLength: 1 }
            },
            required: ['stockStatus']
        },
        {
            properties: {
                reminderMethod: { type: 'string', minLength: 3, maxLength: 255 }
            },
            required: ['reminderMethod']
        }
    ],
    throwError: false
};

module.exports.populateSiteFields = (site, fromEmail, updateMethod) => {
    return {
        fields: {
            uploadedBy: { email: fromEmail },
            siteName: site.siteName,
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
            EIN: site.EIN,
            EFROID: site.EFROID,
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
            stockStatus: site.stockStatus,
            reminderMethod: site.reminderMethod,
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
