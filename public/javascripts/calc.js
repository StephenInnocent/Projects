const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id=='clear') {
            display.innerText = '';
        } else if ( display.innerText !='' && item.id == 'backspace') {
            let string = display.innerText;
            display.innerText = string.substr(0, string.length - 1)
        } else if (display.innerText != "" && item.id =="equal" ) {
            try{
                const result = eval(display.innerText);
                display.innerText = result;
            }catch(e){
                display.innerText = "Maths error"
            } 
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = "provide input" ;
            setTimeout(() => (display.innerText =''),2000);
        }else if(display.innerText =="" && item.id == 'backspace'){
            display
        }else {
            display.innerText += item.id;
        }
    }
})