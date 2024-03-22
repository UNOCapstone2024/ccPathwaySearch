import { parse } from 'papaparse'
import Paginate from './pagination'
import Render from './render'
import Search from './search'
import Recommend from './recommend'
import Sort from './sort'
import { CustomTable, TableState } from './types'


class Table {
    readonly attributeName: string
    readonly classInstance: string
    render: Render
    state: TableState

    constructor(perPage = 10, attributeName = 'data-table', classInstance = 'Table', sortBy = 0) {
        this.attributeName = attributeName
        this.classInstance = classInstance
        this.render = new Render(this.attributeName, this.classInstance)
        this.state = {
            data: [],
            headers: [],
            page: {
                current: 1,
                last: 1,
                per: perPage,
            },
            sort: {
                direction: '',
                field: '',
                init: sortBy,
            },
        }
    }

    public async init(url: string, displayOnStart = false): Promise<void> {
        try {
            parse(url, {
                download: true,
                header: true,
                transformHeader: (h) => {
                    return h.trim()
                },
                transform: (s) => {
                    return s.trim()
                },
                complete: (results) => {
                    if (results.data instanceof Array) {
                        this.state.data = results.data as Record<string, string>[]
                    }
                    if (results.meta.fields) {
                        this.state.headers = results.meta.fields
                    } else {
                        throw 'Headers not found, unable to sort data.'
                    }
                    if (this.state.sort.init > 0) {
                        this.sort(this.state.headers[this.state.sort.init - 1])
                    } else if (displayOnStart) {
                        this.display(this.state.data)
                    }
                },
            })
        } catch (error) {
            console.error(error)
        }
    }

    public page = {
        reload: (e: Event) => {
            const target = e.target
            if (target instanceof HTMLSelectElement) {
                this.state.page.per = Number(target.value)
                this.display(this.state.data)
            }
        },
        next: () => {
            this.state.page.current += 1
            this.display(this.state.data)
        },
        previous: () => {
            this.state.page.current -= 1
            this.display(this.state.data)
        },
        goTo: (e: Event): void => {
            const target = e.target
            if (target instanceof HTMLElement) {
                this.state.page.current = Number(target.innerText)
                this.display(this.state.data)
            }
        },
        first: () => {
            this.state.page.current = 1
            this.display(this.state.data)
        },
        last: () => {
            this.state.page.current = this.state.page.last
            this.display(this.state.data)
        },
    }

    public sort(field: string): void {

        this.state.page.current = 1
        if (this.state.sort.field !== field) {
            this.state.sort = { direction: 'ascending', field: field, init: 0 }
        } else {
            this.state.sort.direction = this.state.sort.direction === 'ascending' ? 'descending' : 'ascending'
        }
        this.state.data = Sort(this.state.data, this.state.sort.field, this.state.sort.direction)
        this.display(this.state.data)
    }

    public search(e: Event): void {
        const target = e.target 
        if (target instanceof HTMLInputElement) {
            this.display(Search(this.state.data, target.value))
        }
    }

    public formSearch(formID: string, clear=false): Table{
        /**
         * Searches through a Table object with multiple search criteria
         * @param formID the id of the form that contains search fields
         * @param clear on true will clear all of the form elements to a blank state
         * @returns a temporary Table object that is filtered on search criteria
         */
        const form = document.getElementById(formID) as HTMLFormElement | null;
        var tempTable = new Table(
            -1,
            "data-GuidedPathways",
            "TableGuidedPathways"
          );
          
        // create tempTable deep copy of this table
        tempTable.state.data = this.state.data
        tempTable.state.headers = this.state.headers
        tempTable.state.page = this.state.page
        tempTable.state.sort = this.state.sort

        if (form) {
            if (clear == true){
                const elements = form.querySelectorAll('select')

                elements.forEach((element, index) => {
                    if (index != 0) {
                        element.innerHTML = ''
                        this.display(this.state.data)
                    }
                })
            }

            const formData = new FormData(form)
            console.log(formData)

            for (var { index, entry } of Array.from(formData.values()).map((entry, index) => ({ index, entry}))) {
                
                if (entry != "" && entry != "All") {
                    tempTable.state.data = Search(tempTable.state.data, entry.toString())
                    this.display(tempTable.state.data)
                }
                else if (entry == "All" && index == 0)
                    this.display(this.state.data)
            }
        }

        return tempTable
    }

    public formDynamicSearch(selectIDs: string[], tempTable: Table): Table {
        /**
         * Performs a search on a given table and dynamically produces dropdown contents
         * @param selectIDs list of select ids that will be populated with dynamic contents
         * @param tempTable the temporary Table object to be used
         */
        const control = document.getElementById(selectIDs[0]) as HTMLFormElement | null;

        for (let i = 1; i < selectIDs.length; i++) {

            const dropdown = document.getElementById(selectIDs[i]) as HTMLFormElement;

            var opts = Recommend(tempTable.state.data, control?.value, dropdown.getAttribute("tableref"))

            dropdown.innerHTML  = '';
            const allOption = document.createElement('option')
            allOption.text = "All"
            allOption.value = "All"
            dropdown.add(allOption)
            
            for (let j = 0; j < opts.length; j++) {
                const option = document.createElement('option')
                option.text = opts[j]
                option.value = opts[j]

                dropdown.add(option)
            }     
        }
        
        return tempTable
    }

    private display(table: CustomTable): void {
        this.state.page.last = Math.ceil(table.length / Number(this.state.page.per))
        if (this.state.page.current > this.state.page.last || this.state.page.current <= 0) {
            this.state.page.current = 1
        }
        const paginatedTable: CustomTable = Paginate(this.state.page.current, this.state.page.per, table)
        this.render.head(this.state.headers, this.state.sort.direction, this.state.sort.field)
        this.render.body(paginatedTable)
        this.render.entries(this.state.page.current, this.state.page.per, table.length)
        this.render.pagination(this.state.page.current, this.state.page.per, this.state.page.last)
    }
}

export default Table
