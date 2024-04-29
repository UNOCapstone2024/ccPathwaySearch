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