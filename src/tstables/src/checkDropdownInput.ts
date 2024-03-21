function checkDropdownInput(dropdown: string, div: string, textbox: string)
{
    var val = (<HTMLInputElement>document.getElementById(dropdown)!).value
    var div_background = (<HTMLInputElement>document.getElementById(div)!)
    if (val == 'All')
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