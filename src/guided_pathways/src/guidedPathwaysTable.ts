import Table from '../../tstables/src/table';
import Search from '../../tstables/src/search';
import { TableRow, CustomTable } from '../../tstables/src/types';

class GuidedPathwaysTable extends Table {
    constructor(perPage = 10, attributeName = 'data-table', classInstance = 'Table', sortBy = 0) {
        super(perPage, attributeName, classInstance, sortBy);
    }

    //checks input 
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

    public Recommend = (table: CustomTable, query: string, type: string | null): string[] => {
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