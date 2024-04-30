/**
 * Adjusts the properties of multiple elements based on the input length in a specified textbox.
 *
 * This function assesses the input value's length in a textbox. If the input length is less than 1,
 * it enables and modifies the background color of each element in the provided list. Additionally,
 * it adjusts the color of a specified div element. If the textbox contains any input, it disables
 * the elements in the list, changes their background color, and modifies the div's color to grey.
 *
 * @param {string} id - The ID of the textbox HTML element to be checked.
 * @param {string} div - The ID of the div HTML element whose color will be modified.
 * @param {Array<string>} list - An array of IDs for the HTML elements to be enabled/disabled and styled.
 */ 
function checkTextboxInput(id: string, div:string, list: Array<string>)
{
    var val = (<HTMLInputElement>document.getElementById(id)!).value
    var div_background = (<HTMLInputElement>document.getElementById(div)!)    
    const theme = (document.getElementsByTagName("html")[0]).getAttribute("data-bs-theme")

    if (val.length < 1)
    {
        for(let i = 0; i < list.length; i++){
            (<HTMLInputElement>document.getElementById(list[i])).disabled = false;

            if(theme == "light"){
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#f2f2f2";
                div_background.style.color = "#555555"
            }

            else if (theme == "dark"){
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#333333";
                div_background.style.color = "#f2f2f2"
            }

        }
        
    }
    else
    {
        for(let i = 0; i < list.length; i++){
            (<HTMLInputElement>document.getElementById(list[i])).disabled = true;

            if(theme == "light"){
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#e1e1e1";
                div_background.style.color = "grey"
            }
            if(theme == "dark"){
                (<HTMLInputElement>document.getElementById(list[i])).style.backgroundColor = "#555555";
                div_background.style.color = "dark grey"
            }



        }
    
    }
}



export default checkTextboxInput