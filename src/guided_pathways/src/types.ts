/**
 * Represents a single row in a table, where each key is a column name, and its value is the cell content.
 */
type TableRow = {
    [name: string]: string
}

/**
 * Defines a type for an array of TableRow, representing a collection of rows in a table.
 */
type CustomTable = TableRow[]

type TableState = {
    /**
     * An array of records, where each record is a row of data in the table.
     */
    data: Record<string, string>[]

    /**
     * An array of header names for the table.
     */
    headers: string[]

    /**
     * Object containing pagination details for the table.
     */
    page: {
        current: number // The current page number
        last: number    // The last page number
        per: number     // Number of rows per page
    }

    /**
     * Object detailing the sorting state of the table.
     */
    sort: {
        direction: string   // The sorting direction ('ascending' or 'descending')
        field: string       // The field by which the table is curently sorted.
        init: number        // Initial sorting state.
    }
}

/**
 * Represents the HTML elements associated with a table's structure in the DOM.
 */
type Elements = {
    tableHead: HTMLTableSectionElement  // The table head section element.
    tableBody: HTMLTableSectionElement  // The table body section element.
    entries: HTMLParagraphElement       // Paragraph element for displaying table entries info.
    pagination: HTMLUListElement        // Unordered liste element for pagination controls.
}

/**
 * Defines the template elements used to dynamically create table rows and cells.
 */
type Templates = {
    row: HTMLTemplateElement        // Template for a table row.
    cell: HTMLTemplateElement       // Tampleate for a table cell.
    header: HTMLTemplateElement     // Template for a table header.
    pagination: HTMLTemplateElement // Template for pagination controls
}

export { CustomTable, TableRow, TableState, Elements, Templates }
