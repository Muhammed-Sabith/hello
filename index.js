let screen = document.getElementById("top");
let numbers = Array.from(document.getElementsByClassName("number"));

numbers.map ( number =>{
    number.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "C":
                screen.innerText = '';
                break;
            case "back":
                if(screen.innerText){
                    screen.innerText = screen.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                }catch {
                    screen.innerText = "ERROR"
                }
                break;
            default:
            screen.innerText += e.target.innerText;
        }
    })
})