import { CustomTable, TableRow } from './types'

// If the keys are what we're searching for, then we look for suggestions in there

const Recommend = (table: CustomTable, query: string, type: string | null): string[] => {
    const results = table.reduce((accumulator: string[], row: TableRow) => {
        Object.keys(row).map((key: string) => {
            if (key.toLowerCase() == type?.toLowerCase() ) {
                console.log(key)
                accumulator.push(row[key].toString())
            }
        })
        accumulator = accumulator.filter((item, index) => accumulator.indexOf(item) === index);
        return accumulator
    }, [])
    return results
}

export default Recommend