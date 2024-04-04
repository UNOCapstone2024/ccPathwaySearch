//checks input 
function checkTextboxInput(id: string, div:string, list: Array<string>)
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



export default checkTextboxInput