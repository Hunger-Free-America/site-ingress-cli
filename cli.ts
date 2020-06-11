/**
 * Program entry point. Takes a .yaml file or directory of .yaml files as a command line argument.
 */

import convert from './convert';
const validate = require('./site-ingestion-schema/validator');
const got = require('got');
const { promises: fs } = require('fs');

const missingFieldMap = 'Please specify an existing .yaml fieldMap file, or a directory of them';
const url = 'https://i3tmnkgp2i.execute-api.us-west-2.amazonaws.com/upload-site';
// const url = 'http://localhost:3000/upload-site';

async function uploadToLambda(data, email, password) {
    try {
        const { body } = await got.post(url, {
            json: { data, email, password },
            responseType: 'json',
        });
        console.log(body);
    } catch (err) {
        console.error('Server returned: ' + err.response.statusCode + '\n' + JSON.stringify(err.response.body));
    }
}

(async () => {

    let data = [];
    const path = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];
    const pathType = await fs.stat(path);

    if (!email) {
        throw new Error(`

You must include your email. Format:

    yarn start <yamlFieldMapPath> <email> <password>

If password is blank, will push to TEST Airtable base instead of Main.
`       );
    }

    if (pathType.isFile() && (path.endsWith('.yaml') || path.endsWith('.yml'))) {

        console.log(`Parsing file '${path}'...`);

        data = await convert(path);

    } else if (pathType.isDirectory()) {

        console.log(`Parsing directory '${path}'...`);

        const dirContents = await fs.readdir(path);
        const yamlFieldMaps = dirContents
            .filter((file: string) => (file.endsWith('.yml') || file.endsWith('.yaml')));

        if (!yamlFieldMaps.length) throw new Error(missingFieldMap);

        for await (const yamlFile of yamlFieldMaps) {
            for await (const object of await convert(`${path}/${yamlFile}`)) {
                data.push(object);
            }
        }
    } else {
        throw new Error(missingFieldMap);
    }

    // check if sites conform to schema
    const checked = validate(data);
    if (checked.invalid.length) {
        console.error('This data did not pass validation and will not be included:', checked.invalid);
    }

    console.log(`Done converting, beginning push of ${checked.valid.length} records to site ingestion API... (lets see if your password worked ;P)`);

    // push to site-ingestion-api in batches of 100
    for (let i = 0; i < checked.valid.length; i += 100) {
        await uploadToLambda(checked.valid.slice(i, i < checked.valid.length ? i + 100 : checked.valid.length), email, password);
    }
})();
