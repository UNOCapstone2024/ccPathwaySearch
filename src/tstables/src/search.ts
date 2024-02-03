import { CustomTable, TableRow } from './types'

const Search = (table: CustomTable, query: string): CustomTable => {
    const results = table.reduce((accumulator: CustomTable, row: TableRow) => {
        Object.keys(row).map((key: string) => {
            if (row[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                if (!accumulator.includes(row)) return accumulator.push(row)
            }
        })
        return accumulator
    }, [])
    return results
}

export default Search
