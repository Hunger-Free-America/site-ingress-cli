/**
 * Takes as fieldMap `map` and matches it with the header columns of the data file
 */
type strNumHash = {
    [key: string]: number;
};
type strStrHash = {
    [key: string]: string;
};

export type Fields = {
    matched: strNumHash, indexes: number[], unmatched: strStrHash, total: number;
};

export default (map: strStrHash, columns) => {
    /**
     * map matched fields to their column index while separating unmatched fields
     *
     * out.matched[airtable field] = index of corresponding spreadsheet column
     * out.indexes = list of indexes of necessary spreadsheet columns
     * out.unmatched[airtable field] = value to hard-code
     * out.total = max number of fields per object
     * CHEATCODE = a fieldMap value which forces a required field to be blank
     */
    return Object.entries(map).reduce((out: Fields, [field, value]) => {

        if ((!0 && !value) || value === 'CHEATCODE')
            return out;

        const i: number = columns.findIndex(header => header === value);

        if (i > -1) {
            out.matched[field] = i;
            out.indexes.push(i);
        } else if (['siteName', 'siteStreetAddress', 'siteZip'].includes(field)) {
            throw new Error(`can't hard-code ${field}`);
        } else {
            out.unmatched[field] = value;
        }

        out.total += 1;

        return out;
    }, { matched: {}, indexes: [], unmatched: {}, total: 0 });
};
