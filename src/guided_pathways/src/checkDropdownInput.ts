/**
 * Modifies the properties of a textbox and a div based on the selected value in a dropdown.
 *
 * This function checks the value of a dropdown element. If the value is 'All', it enables the textbox
 * and sets its background color to a lighter shade, while also adjusting the color of the div element.
 * If the dropdown value is not 'All', it disables the textbox, changes its background to a darker shade,
 * and alters the div's text color to grey.
 *
 * @param {string} dropdown - The ID of the dropdown HTML element to be evaluated.
 * @param {string} div - The ID of the div HTML element whose color will be modified.
 * @param {string} textbox - The ID of the textbox HTML element that will be enabled/disabled and styled.
 */
function checkDropdownInput(dropdown: Array<string>, div: string, textbox: string)
{
    var og_color = (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor
    var div_background = (<HTMLInputElement>document.getElementById(div)!)
    var bgColor = div_background.style.backgroundColor
    var disable_items = false
    const theme = (document.getElementsByTagName("html")[0]).getAttribute("data-bs-theme")
    var val;

    for(var i = 0; i < dropdown.length; i++)
    {
        val = (<HTMLInputElement>document.getElementById(dropdown[i])!).value

        

        if (val == 'All')
            {
                disable_items = false;
                
        }
        else 
        {
            disable_items = true;
            break
        }
    }

    if (disable_items == false)
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = false;

        if(theme == "light"){
            (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#f2f2f2";
            div_background.style.color = "#555555"
        }
        else if(theme == "dark"){
            (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#333333";
            div_background.style.color = "#f2f2f2"
        }
        
        
    }
    else
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = true;

        if(theme == "light"){
            (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#e1e1e1";
            div_background.style.color = "grey"
        }

        else if(theme == "dark"){
            (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#555555";
            div_background.style.color = "dark grey"
        }

    }
    
}

export default checkDropdownInput