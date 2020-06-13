/**
 * Program entry point. Takes a .yaml file or directory of .yaml files as a command line argument.
 */

import convert from './convert';
const pushToAirtable = require('./src/pushToAirtable');
const validate = require('./site-ingestion-schema/validator');
const { promises: fs } = require('fs');

const cliFormat = `
Format:

    yarn start <yamlFieldMapPath> <email> <password>

If password is blank, will push to TEST Airtable base instead of Main.
`;
const missingEmail = new Error(`

You must include your email.` + cliFormat);
const missingFieldMap = new Error(`

Please specify an existing .yaml fieldMap file, or a directory of them.` + cliFormat);

(async () => {
    let data = [];
    const path = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];

    if (!path) throw missingFieldMap;

    const pathType = await fs.stat(path);

    if (!email) {
        throw missingEmail;
    }

    if (pathType.isFile() && (path.endsWith('.yaml') || path.endsWith('.yml'))) {

        console.log(`
Parsing file '${path}'...`);

        data = await convert(path);

    } else if (pathType.isDirectory()) {

        console.log(`
Parsing directory '${path}'...`);

        const dirContents = await fs.readdir(path);
        const yamlFieldMaps = dirContents
            .filter((file: string) => (file.endsWith('.yml') || file.endsWith('.yaml')));

        if (!yamlFieldMaps.length) throw missingFieldMap;

        for await (const yamlFile of yamlFieldMaps) {
            for await (const object of await convert(`${path}/${yamlFile}`)) {
                data.push(object);
            }
        }
    } else {
        throw missingFieldMap;
    }

    // check if sites conform to schema
    const checked = validate(data);
    if (!checked.valid.length) {
        throw new Error(`
No sites passed validation. Aborting.
`);
    } else if (checked.invalid.length) {
        console.error(`
${checked.invalid.length} sites did not pass validation and will not be included:`);
        // eslint-disable-next-line no-undefined
        console.error(`${JSON.stringify(checked.invalid, undefined, 4)}`);
    } else {
        console.log(`
All sites passed validation.`);
    }

    console.log(`
Done converting, beginning push of ${checked.valid.length} records to site ingestion API... (lets see if your password worked ;P)`);

    // attempt to push to Airtable
    await pushToAirtable(checked.valid, email, password);

    console.log(`
Upload complete.
`);
})();
