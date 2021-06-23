function sum () {
    var numb1 = Number (document.getElementById ("numberinput1").value);
    var  numb2 = Number (document.getElementById ("numberinput2").value);
    document.getElementById ("answersum").innerHTML = numb1 + numb2;
}

function subtract () {
    var numb1 = Number (document.getElementById ("numberinput3").value);
    var numb2 = Number (document.getElementById ("numberinput4").value);
    document.getElementById ("answersubtract").innerHTML = numb1 - numb2;
}

function multiply () {
    var numb1 = Number (document.getElementById ("numberinput5").value);
    var numb2 = Number (document.getElementById ("numberinput6").value);
   document.getElementById ("answermultiply").innerHTML = numb1 * numb2;
}

function divide () {
    var numb1 = Number (document.getElementById ("numberinput7").value);
    var numb2 = Number (document.getElementById ("numberinput8").value);
    document.getElementById ("answerdivide").innerHTML = numb1 / numb2;
}
