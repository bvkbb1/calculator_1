var button = document.getElementsByTagName('button');
var displayValue  = document.getElementById("display");

for (i=0; i<button.length; i++){
    button[i].onclick = function(){
        let input = this.innerText
        updateDisplay(input)
    }
}

function onAllClearBtnClicked(){
    displayValue  = "0";
}

function updateDisplay(input){

    if (displayValue.innerText == "0"){
        displayValue.innerText = ""
    }

    // console.log(input)
    if (input!="AC" && input!="Del" && input!="="){
        displayValue.innerText+=input
    }
    else if (input == "AC"){
        displayValue.innerText = ""
    }
    else if(input == "="){
        var result = eval(displayValue.innerText)
        console.log(result)
        displayValue.innerText=result
    }
    else if(input == "Del"){
        var value = displayValue.innerText
        displayValue.innerText = value.substring(0,value.length-1)
    }
}
