import { Fields } from './parseFieldMap';

export default (data, fields: Fields) => {

    // filter out rows where too many listed fields are empty
    // and turn the array of arrays into an array of objects
    return data.filter(row => {
        return row.filter(row => {
            return fields.indexes.map((i: number) => row[i]);
        }).filter(Boolean).length > 2;
    }).map(row => {

        // keep only cells from matching mapped columns & give airtable field names
        const rowObject = Object.entries(fields.matched).reduce((out, [field, i]) => {
            // trim whitespace and strip newlines & quotes at beginning & end
            if (row[i]) {
                out[field] = row[i].toString().replace(/\s/g, ' ').replace(/^"/, '').replace(/"$/, '').replace(/^\s+/, '').replace(/\s+$/, '');
            } else {
                out[field] = null;
            }
            return out;
        }, {});

        // add hard-coded fields (i.e. siteCountry: 'USA')
        Object.entries(fields.unmatched).forEach(([field, value]) => {
            rowObject[field] = value;
        });

        return rowObject;
    });
};
