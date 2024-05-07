import Table from '../../tstables/src/table';
import Search from '../../tstables/src/search';
import { TableRow, CustomTable } from '../../tstables/src/types';

/**
 * A table class specifically designed for guided pathways, extending general table functionalities.
 */
class GuidedPathwaysTable extends Table {
    constructor(perPage = 10, attributeName = 'data-table', classInstance = 'Table', sortBy = 0) {
        super(perPage, attributeName, classInstance, sortBy);
    }

    
    /**
     * Adjusts properties of multiple elements based on the input length in a specified textbox.
     * 
     * @param {string} id - The ID of the textbox HTML element to be checked.
     * @param {string} div - The ID of the div HTML element whose color will be modified.
     * @param {Array<string>} list - An array of IDs for the HTML elements to be enabled/disabled and styled.
     */
    public checkTextboxInput(id: string, div:string, list: Array<string>)
    {
        var val = (<HTMLInputElement>document.getElementById(id)!).value
        var div_background = (<HTMLInputElement>document.getElementById(div)!)
        if (val.length < 1)
        {
            for(let i = 0; i < list.length; i++){
                (<HTMLInputElement>document.getElementById(list[i])).disabled = false;
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#f2f2f2";
                div_background.style.color = "#555555"
            }

        }
        else
        {
            for(let i = 0; i < list.length; i++){
                (<HTMLInputElement>document.getElementById(list[i])).disabled = true;
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#e1e1e1";
                div_background.style.color = "grey"

            }
        
        }
    }


    /**
     * Recommends options based on the provided query and type within a table.
     * 
     * @param {CustomTable} table - The table data to search through.
     * @param {string} query - The query string to search for.
     * @param {string | null} type - The type of data to search for.
     * @returns {string[]} An array of unique recommendations based on the query and type.
     */
    public Recommend = (table: CustomTable, query: string, type: string | null): string[] => {
        const results = table.reduce((accumulator: string[], row: TableRow) => {
            Object.keys(row).map((key: string) => {
                if (key.toLowerCase() == type?.toLowerCase() ) {
                    accumulator.push(row[key].toString())
                }
            })
            accumulator = accumulator.filter((item, index) => accumulator.indexOf(item) === index);
            return accumulator
        }, [])
        return results
    }


    /**
     * Searches through a Table object with multiple search criteria
     * 
     * @param {string} formID - the id of the form that contains search fields
     * @param {boolean} clear - on true will clear all of the form elements to a blank state
     * @returns {Table} a temporary Table object that is filtered on search criteria
     */
    public formSearch(formID: string, clear=false): Table{
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


    /**
     * Performs a search on a given table and dynamically produces dropdown contents
     * 
     * @param {string[]} selectIDs - list of select ids that will be populated with dynamic contents
     * @param {Table} tempTable - the temporary Table object to be used
     * @returns {Table} The updated Table instance after dynamic search.
     */
    public formDynamicSearch(selectIDs: string[], tempTable: Table): Table {
        const control = document.getElementById(selectIDs[0]) as HTMLFormElement | null;
        for (let i = 1; i < selectIDs.length; i++) {
            const dropdown = document.getElementById(selectIDs[i]) as HTMLFormElement;
            var opts = this.Recommend(tempTable.state.data, control?.value, dropdown.getAttribute("tableref"))
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
}

export default GuidedPathwaysTable