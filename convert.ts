/**
 * Reads/parses/validates fieldMap and reads associated data files
 */

import check from './utils/checks';
import { parse } from 'yaml';
import parseFieldMap from './utils/parseFieldMap';
import parseFile from './utils/parseFile';
import rowsToObjects from './utils/rowsToObjects';
const { promises: fs } = require('fs');

export default async (yamlFilePath: string): Promise<any> => {

    const fieldMap = parse(await fs.readFile(yamlFilePath, 'utf8'));

    // ensure the right format & required values
    check(fieldMap);

    // map = fieldMap.fields with nulls cleared
    const map = {};
    for (const [key, value] of Object.entries(fieldMap.fields)) {
        if (value) map[key] = value;
    }

    return await fieldMap.files.reduce((out: any, fileName: string) => {
        // open, check, and parse .csv or .xlsx
        let data = parseFile(fileName);

        // split header row, which corresponds to spreadsheet column names
        const columns = data.shift();

        // map matched fields to their column index while separating unmatched fields
        // fields.matched[airtable field] = index of corresponding spreadsheet column
        // fields.indexes = list of indexes of necessary spreadsheet columns
        // fields.unmatched[airtable field] = value to hard-code
        // fields.total = max number of fields per object
        const fields = parseFieldMap(map, columns);

        // filter out rows where too many listed fields are empty
        // and turn the array of arrays into an array of objects
        data = rowsToObjects(data, fields);

        console.log(`Created ${data.length} objects (of up to ${fields.total} fields each) from ${fileName}`);

        return [...out, ...data];
    }, []);
};
