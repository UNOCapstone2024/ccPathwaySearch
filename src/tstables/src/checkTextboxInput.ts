//checks input 
function checkTextboxInput(id: string, list: Array<string>)
{
    var val = (<HTMLInputElement>document.getElementById(id)!).value
    if (val.length < 1)
    {
        for(let i = 0; i < list.length; i++){
            (<HTMLInputElement>document.getElementById(list[i])).disabled = false
        }
        
    }
    else
    {
        for(let i = 0; i < list.length; i++){
            (<HTMLInputElement>document.getElementById(list[i])).disabled = true

        }
    
    }
}



export default checkTextboxInput