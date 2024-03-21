import { CustomTable } from './types'

const Paginate = (currentPage: number, perPage: number, table: CustomTable): CustomTable => {
    const first = (currentPage - 1) * perPage
    const last = first + perPage

    // -1 is used to display the entire table on one page
    if (perPage === -1) {
        return table
    }

    return table.slice(first, last)
}

export default Paginate
