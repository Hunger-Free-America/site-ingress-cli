/**
 * Defines the data schema and functions for creating site/site detail objects
 */

module.exports.dataSchema = {
    id: '/dataSchema',
    type: 'object',
    properties: {
        siteName: { type: 'string' },
        siteStreetAddress: { type: 'string' },
        siteCity: { type: 'string' },
        siteState: { type: 'string' },
        siteZip: { type: 'string' },
        siteCountry: { type: 'string' },
        siteCounty: { type: 'string' },
        siteNeighborhood: { type: 'string' },
        siteType: { type: 'string' },
        siteSubType: { type: 'string' },
        lat: { type: 'string' },
        lng: { type: 'string' },
        EFROID: { type: 'string' },
        publicContactMethod: { type: 'string' },
        publicPhone: { type: 'string' },
        publicEmail: { type: 'string' },
        website: { type: 'string' },
        socialMedia: { type: 'string' },
        contactName: { type: 'string' },
        contactPhone: { type: 'string' },
        contactEmail: { type: 'string' },
        status: { type: 'string' },
        publicOpenness: { type: 'string' },
        deliveryEligibility: { type: 'string' },
        eligibilityRequirements: { type: 'string' },
        hoursEligibility1: { type: 'string' },
        hours1: { type: 'string' },
        hoursEligibility2: { type: 'string' },
        hours2: { type: 'string' },
        hoursEligibility3: { type: 'string' },
        hours3: { type: 'string' },
        validUntil: { type: 'string' },
        acceptsFoodDonations: { type: 'string' },
        hasEnoughFood: { type: 'string' },
        canReceiveBulk: { type: 'string' },
        foodNeeds: { type: 'string' },
        hasBabyFormula: { type: 'string' },
        staffVolunteerNeeds: { type: 'string' },
        recruitingAssistance: { type: 'string' },
        otherNeeds: { type: 'string' },
        covidChanges: { type: 'string' },
        increasedDemandCauses: { type: 'string' },
        totalFoodCommunityNeeds: { type: 'string' },
        currentCapacity: { type: 'string' },
        staffVolunteerReduction: { type: 'string' },
        safetyPrecautions: { type: 'string' },
        languages: { type: 'string' },
        nearbyFoodPrograms: { type: 'string' },
        notesGovRequests: { type: 'string' },
        notesAnythingElse: { type: 'string' },
        stockStatus: { type: 'string' },
        reminderMethod: { type: 'string' },
    },
    required: ['siteName'],

    // accept address in any of the following forms
    // TODO: add state validation
    anyOf: [
        {
            properties: {
                siteStreetAddress: { type: 'string' }
            },
            required: ['siteStreetAddress']
        },
        {
            properties: {
                siteZip: { type: 'string' }
            },
            required: ['siteZip']
        },
        {
            properties: {
                siteCity: { type: 'string' },
                siteState: { type: 'string' }
            },
            required: ['siteCity', 'siteState']
        },
    ],
    throwError: false,
};

module.exports.detailsSchema = {
    id: '/detailsSchema',
    type: 'object',
    properties: this.dataSchema.properties,
    required: ['siteName'],

    // checks if any details fields exist
    anyOf: [
        {
            properties: {
                publicContactMethod: { type: 'string' }
            },
            required: ['publicContactMethod']
        },
        {
            properties: {
                publicPhone: { type: 'string' }
            },
            required: ['publicPhone']
        },
        {
            properties: {
                publicEmail: { type: 'string' }
            },
            required: ['publicEmail']
        },
        {
            properties: {
                website: { type: 'string' }
            },
            required: ['website']
        },
        {
            properties: {
                socialMedia: { type: 'string' }
            },
            required: ['socialMedia']
        },
        {
            properties: {
                contactName: { type: 'string' }
            },
            required: ['contactName']
        },
        {
            properties: {
                contactPhone: { type: 'string' }
            },
            required: ['contactPhone']
        },
        {
            properties: {
                contactEmail: { type: 'string' }
            },
            required: ['contactEmail']
        },
        {
            properties: {
                status: { type: 'string' }
            },
            required: ['status']
        },
        {
            properties: {
                publicOpenness: { type: 'string' }
            },
            required: ['publicOpenness']
        },
        {
            properties: {
                deliveryEligibility: { type: 'string' }
            },
            required: ['deliveryEligibility']
        },
        {
            properties: {
                eligibilityRequirements: { type: 'string' }
            },
            required: ['eligibilityRequirements']
        },
        {
            properties: {
                hoursEligibility1: { type: 'string' }
            },
            required: ['hoursEligibility1']
        },
        {
            properties: {
                hours1: { type: 'string' }
            },
            required: ['hours1']
        },
        {
            properties: {
                hoursEligibility2: { type: 'string' }
            },
            required: ['hoursEligibility2']
        },
        {
            properties: {
                hours2: { type: 'string' }
            },
            required: ['hours2']
        },
        {
            properties: {
                hoursEligibility3: { type: 'string' }
            },
            required: ['hoursEligibility3']
        },
        {
            properties: {
                hours3: { type: 'string' }
            },
            required: ['hours3']
        },
        {
            properties: {
                validUntil: { type: 'string' }
            },
            required: ['validUntil']
        },
        {
            properties: {
                acceptsFoodDonations: { type: 'string' }
            },
            required: ['acceptsFoodDonations']
        },
        {
            properties: {
                hasEnoughFood: { type: 'string' }
            },
            required: ['hasEnoughFood']
        },
        {
            properties: {
                canReceiveBulk: { type: 'string' }
            },
            required: ['canReceiveBulk']
        },
        {
            properties: {
                foodNeeds: { type: 'string' }
            },
            required: ['foodNeeds']
        },
        {
            properties: {
                hasBabyFormula: { type: 'string' }
            },
            required: ['hasBabyFormula']
        },
        {
            properties: {
                staffVolunteerNeeds: { type: 'string' }
            },
            required: ['staffVolunteerNeeds']
        },
        {
            properties: {
                recruitingAssistance: { type: 'string' }
            },
            required: ['recruitingAssistance']
        },
        {
            properties: {
                otherNeeds: { type: 'string' }
            },
            required: ['otherNeeds']
        },
        {
            properties: {
                covidChanges: { type: 'string' }
            },
            required: ['covidChanges']
        },
        {
            properties: {
                increasedDemandCauses: { type: 'string' }
            },
            required: ['increasedDemandCauses']
        },
        {
            properties: {
                totalFoodCommunityNeeds: { type: 'string' }
            },
            required: ['totalFoodCommunityNeeds']
        },
        {
            properties: {
                currentCapacity: { type: 'string' }
            },
            required: ['currentCapacity']
        },
        {
            properties: {
                staffVolunteerReduction: { type: 'string' }
            },
            required: ['staffVolunteerReduction']
        },
        {
            properties: {
                safetyPrecautions: { type: 'string' }
            },
            required: ['safetyPrecautions']
        },
        {
            properties: {
                languages: { type: 'string' }
            },
            required: ['languages']
        },
        {
            properties: {
                nearbyFoodPrograms: { type: 'string' }
            },
            required: ['nearbyFoodPrograms']
        },
        {
            properties: {
                notesGovRequests: { type: 'string' }
            },
            required: ['notesGovRequests']
        },
        {
            properties: {
                notesAnythingElse: { type: 'string' }
            },
            required: ['notesAnythingElse']
        },
        {
            properties: {
                stockStatus: { type: 'string' }
            },
            required: ['stockStatus']
        },
        {
            properties: {
                reminderMethod: { type: 'string' }
            },
            required: ['reminderMethod']
        },
        {
            properties: {
                siteStreetAddress: { type: 'string' }
            },
            required: ['siteStreetAddress']
        },
        {
            properties: {
                siteZip: { type: 'string' }
            },
            required: ['siteZip']
        },
        {
            properties: {
                siteCity: { type: 'string' },
                siteState: { type: 'string' }
            },
            required: ['siteCity', 'siteState']
        },
    ],
    throwError: false,
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
            siteZip: site.siteZip ? site.siteZip + '' : null,
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
            contactPhone: site.contactPhone ? site.contactPhone + '' : null,
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
            publicPhone: site.publicPhone ? site.publicPhone + '' : null,
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
            notesAnythingElse: site.notesAnythingElse ? site.notesAnythingElse + '' : null,
            createdMethod: updateMethod
        }
    };
};
