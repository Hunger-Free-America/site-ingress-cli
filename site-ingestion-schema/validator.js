/**
 * Validates JSON input
 *
 * Expect data format to be an array of objects, each with a site, siteDetails field
 */
'use strict';

const { dataSchema, detailsSchema } = require('./schema');
const Validator = require('jsonschema').Validator;

const v = new Validator();

// Returns a new object containing arrays of valid & invalid objects
module.exports = (data) => {

    return data.reduce((out, row) => {
        if (v.validate(row, dataSchema).valid) {
            row.hasDetails = v.validate(row, detailsSchema).valid;
            out.valid.push(row);
        } else { out.invalid.push(row); }

        return out;
    }, { valid: [], invalid: [] });

};
