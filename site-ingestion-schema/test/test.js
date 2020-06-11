/* eslint-disable no-undef */
'use strict';

const assert = require('assert');
const validate = require('../validator');

const validTestSite = {
    siteName: 'testSite',
    siteStreetAddress: '123 Test Ave',
    siteCity: 'TestVille',
    siteCountry: 'USA',
    siteState: 'TS',
    siteZip: '12345',
    contactName: 'Test Detail 1/2'
};

describe('Basic checks', () => {
    it('Should return all empty data objects in result.invalid', async () => {
        const data = [{}, {}, {}];
        const result = await validate(data);

        assert.deepStrictEqual(data, result.invalid);
    });
    it('Should return single valid data object in result.valid', async () => {
        const data = [validTestSite];
        const result = await validate(data);

        assert.deepStrictEqual(data, result.valid);
    });
});

describe('Check for invalid field typing', () => {
    it('Should return false for site containing undefined for required field', async () => {
        const invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        // eslint-disable-next-line no-undefined
        invalidTestSite.siteName = undefined;

        const data = [validTestSite, invalidTestSite];

        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site containing invalid typing', async () => {
        const invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = 12345;

        const data = [validTestSite, invalidTestSite];

        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});

describe('Check required field validation for siteName', () => {
    it('Should return false for site containing undefined for required field', async () => {
        const invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        // eslint-disable-next-line no-undefined
        invalidTestSite.siteName = undefined;

        const data = [validTestSite, invalidTestSite];

        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site containing invalid typing for required field', async () => {
        const invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = 12345;

        const data = [validTestSite, invalidTestSite];

        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site missing required field', async () => {
        const invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        delete invalidTestSite.siteName;

        const data = [validTestSite, invalidTestSite];

        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});

describe('Check augmented required field validation logic', () => {
    it('Should return false for site containing only siteName', async () => {
        const testSite = {
            siteName: 'testSite2',
        };

        const data = [testSite];
        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });

    it('Should return true for site containing siteName and siteStreetAddress', async () => {
        const testSite = {
            siteName: 'testSite3',
            siteStreetAddress: 'address2'
        };

        const data = [testSite];
        const [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return true for site containing siteName and siteZip', async () => {
        const testSite = {
            siteName: 'testSite4',
            siteZip: '12345'
        };

        const data = [testSite];
        const [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return true for site containing siteName, siteCity, and siteState', async () => {
        const testSite = {
            siteName: 'testSite4',
            siteCity: 'testCity',
            siteState: 'TS',
        };

        const data = [testSite];
        const [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return false for site containing only siteCity and siteState', async () => {
        const testSite = {
            siteCity: 'testCity',
            siteState: 'TS',
            hours1: 'Always Open',
        };

        const data = [testSite];
        const [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});
