//checks input 
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