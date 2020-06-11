var assert = require('assert');
const validate = require('../validator');

const validTestSite = {
    siteName: "testSite",
    siteStreetAddress: "123 Test Ave",
    siteCity: "TestVille",
    siteCountry: "USA",
    siteState: "TS",
    siteZip: "12345",
    contactName: "Test Detail 1/2"
}

describe('Basic checks', function () {
    it('Should return false for empty data objects', async function () {
        let data = [{}, {}, {}];
        let [isValid, err] = await validate(data);

        assert.equal(isValid, false);
    });
    it('Should return true for single valid data object', async function () {
        let data = [validTestSite];
        let [isValid, err] = await validate(data);

        assert.equal(isValid, true);
    });
});

describe('Check for invalid field typing', function () {
    it('Should return false for site containing undefined for required field', async function () {
        let invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = undefined;

        let data = [validTestSite, invalidTestSite];

        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site containing invalid typing', async function () {
        let invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = 12345;

        let data = [validTestSite, invalidTestSite];

        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});

describe('Check required field validation for siteName', function () {
    it('Should return false for site containing undefined for required field', async function () {
        let invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = undefined;

        let data = [validTestSite, invalidTestSite];

        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site containing invalid typing for required field', async function () {
        let invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        invalidTestSite.siteName = 12345;

        let data = [validTestSite, invalidTestSite];

        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
    it('Should return false for site missing required field', async function () {
        let invalidTestSite = JSON.parse(JSON.stringify(validTestSite));
        delete invalidTestSite.siteName;

        let data = [validTestSite, invalidTestSite];

        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});

describe('Check augmented required field validation logic', function () {
    it('Should return false for site containing only siteName', async function () {
        let testSite = {
            "siteName": "testSite2",
        }

        let data = [testSite];
        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });

    it('Should return true for site containing siteName and siteSreetAddress', async function () {
        let testSite = {
            "siteName": "testSite3",
            "siteStreetAddress": "address2"
        }

        let data = [testSite];
        let [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return true for site containing siteName and siteZip', async function () {
        let testSite = {
            "siteName": "testSite4",
            "siteZip": "12345"
        }

        let data = [testSite];
        let [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return true for site containing siteName, siteCity, and siteState', async function () {
        let testSite = {
            "siteName": "testSite4",
            "siteCity": "testCity",
            "siteState": "TS",
        }

        let data = [testSite];
        let [isValid, err] = await validate(data);
        assert.equal(isValid, true);
    });

    it('Should return false for site containing only siteCity and siteState', async function () {
        let testSite = {
            "siteCity": "testCity",
            "siteState": "TS",
            "hours1": "Always Open",
        }

        let data = [testSite];
        let [isValid, err] = await validate(data);
        assert.equal(isValid, false);
    });
});