function checkDropdownInput(dropdown: string, textbox: string)
{
    var val = (<HTMLInputElement>document.getElementById(dropdown)!).value
    if (val == 'All')
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = false
        
        
    }
    else
    {
        (<HTMLInputElement>document.getElementById(textbox)).disabled = true

    }
    
}

export default checkDropdownInput