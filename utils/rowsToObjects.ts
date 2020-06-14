/**
 * Filter out rows where too many (more than 2) mapped fields are empty,
 * tidy up strings, & turn the array of arrays into an array of objects
 */

import { Fields } from './parseFieldMap';

export default (data, fields: Fields) => {

    // Filter out rows where too many (more than 2) mapped fields are empty
    return data.filter(rows => {
        return rows.filter(row => {
            return fields.indexes.map((i: number) => row[i]);
        }).filter(Boolean).length > 2;

        // Turn the array of arrays into an array of objects
    }).map(row => {

        // Keep only cells from matching mapped columns & give airtable field names
        const rowObject = Object.entries(fields.matched).reduce((out, [field, i]) => {

            // Trim whitespace and strip newlines & quotes at beginning & end
            if (row[i] || row[i] === 0) {
                const temp = row[i].toString().replace(/\s+/g, ' ').replace(/^"/, '').replace(/"$/, '').replace(/^\s+/, '').replace(/\s+$/, '');

                // Throw out nulls, undefined & remaining empty strings
                if (temp) out[field] = temp;
            }

            return out;
        }, {});

        // Add hard-coded fields (i.e. siteCountry: 'USA')
        Object.entries(fields.unmatched).forEach(([field, value]) => {
            rowObject[field] = value;
        });

        return rowObject;
    });
};
