function sum () 
{var a = Number (document.getElementById ("numberinput1").value);
var b = Number (document.getElementById ("numberinput2").value);
var answersum = document.getElementById ("answersum").innerHTML = a + b;
} 

function subtract ()
{var c = Number (document.getElementById ("numberinput3").value);
var d = Number (document.getElementById ("numberinput4").value);
var answersubtract = document.getElementById ("answersubtract").innerHTML = c - d;}

function multiply ()
{var e = Number (document.getElementById ("numberinput5").value);
var f = Number (document.getElementById ("numberinput6").value);
var answermultiply = document.getElementById ("answermultiply").innerHTML = e * f;}

function divide ()
{var g = Number (document.getElementById ("numberinput7").value);
var h = Number (document.getElementById ("numberinput8").value);
var answerdivide = document.getElementById ("answerdivide").innerHTML = g / h;}