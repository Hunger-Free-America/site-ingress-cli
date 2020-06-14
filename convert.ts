/**
 * Reads, parses, & validates a fieldMap and reads associated data files
 */

import check from './utils/checks';
import { parse } from 'yaml';
import parseFieldMap from './utils/parseFieldMap';
import parseFile from './utils/parseFile';
import rowsToObjects from './utils/rowsToObjects';
const { promises: fs } = require('fs');

export default async (yamlFilePath) => {

    const fieldMap = parse(await fs.readFile(yamlFilePath, 'utf8'));

    // Ensure the right format & required values
    check(fieldMap);

    return await fieldMap.files.reduce((out: any[], fileName: string) => {
        // Open, check, and parse .csv or .xlsx
        let data = parseFile(fileName);

        // Split header row, which corresponds to spreadsheet column names
        const columns = data.shift();

        /**
         * Map matched fields to their column index while separating unmatched fields
         *
         * fields.matched[airtable field] = index of corresponding spreadsheet column
         * fields.indexes = list of indexes of necessary spreadsheet columns
         * fields.unmatched[airtable field] = value to hard-code
         * fields.total = max number of fields per object
         */
        const fields = parseFieldMap(fieldMap.fields, columns);

        /**
         * Filter out rows where too many (more than 2) mapped fields are empty,
         * tidy up strings, & turn the array of arrays into an array of objects
         */
        data = rowsToObjects(data, fields);

        console.log(`
Created ${data.length} objects (of up to ${fields.total} fields each) from '${fileName}'`);

        return [...out, ...data];
    }, []);
};
