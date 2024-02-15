type TableRow = {
    [name: string]: string
}
type CustomTable = TableRow[]
type TableState = {
    data: Record<string, string>[]
    headers: string[]
    page: {
        current: number
        last: number
        per: number
    }
    sort: {
        direction: string
        field: string
        init: number
    }
}
type Elements = {
    tableHead: HTMLTableSectionElement
    tableBody: HTMLTableSectionElement
    entries: HTMLParagraphElement
    pagination: HTMLUListElement
}
type Templates = {
    row: HTMLTemplateElement
    cell: HTMLTemplateElement
    header: HTMLTemplateElement
    pagination: HTMLTemplateElement
}
type FormStack = {
    inputs: [HTMLInputElement]
}

export { CustomTable, TableRow, TableState, Elements, Templates, FormStack }
