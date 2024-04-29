function checkDropdownInput(dropdown: Array<string>, div: string, textbox: string)
{
    var og_color = (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor
    var div_background = (<HTMLInputElement>document.getElementById(div)!)
    var bgColor = div_background.style.backgroundColor
    var disable_items = false
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
        console.log(disable_items)
    }

    if (disable_items == false)
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = false;
        (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#f2f2f2";
        div_background.style.color = "#555555"
        
    }
    else
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = true;
        (<HTMLInputElement>document.getElementById(textbox)).style.backgroundColor = "#e1e1e1";
        div_background.style.color = "grey"
    }
    
}

export default checkDropdownInput