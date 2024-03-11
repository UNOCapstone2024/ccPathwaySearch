import { CustomTable, TableRow } from './types'

const Sort = (data: CustomTable, field: string, direction: string): CustomTable => {
    if (direction === 'ascending') {
        data.sort((a: TableRow, b: TableRow) => {
            // Blank fields are pushed to the bottom of the list on both ascending and descending
            if (a[field] === '') {
                return 1
            } else if (b[field] === '') {
                return -1
            }
            return a[field].localeCompare(b[field])
        })
        return data
    }
    data.sort((a: TableRow, b: TableRow) => {
        if (a[field] === '') {
            return 1
        } else if (b[field] === '') {
            return -1
        }
        return b[field].localeCompare(a[field])
    })
    return data
}

export default Sort
