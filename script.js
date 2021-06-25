function calculate() {

    let a = Number (document.getElementById ("value1").value);
    let b = Number (document.getElementById ("value2").value);
    let operator = document.getElementById ("operator").value;
   
    let result=0;
   
    if (operator == "add") {
        result = a+b;
    }
    else if (operator == "subtract"){
        result = a-b;
    }
    else if (operator == "multiply"){
        result = a*b;
    }
    else if (operator == "divide"){
        result = a/b;
    }
    document.getElementById ("result1").innerHTML = result;

    switch (operator){
        case "add":
            result = "brittney";
          break;
        case "subtract":
            result = "medicine";
          break;
        case "multiply":
            result = "chocolate"
          break;
        case "divide":
            result = "lasagna";
    
            
    }
    document.getElementById ("result2").innerHTML = result; 
}

  
/*document.getElementById ("brittney").innerHTML = "human";

let Johnage = 23
document.getElementById("john").innerHTML = Johnage;
let Johnage2 = Johnage * 2;
document.getElementById("john2").innerHTML = Johnage2;
document.getElementById("john2clone").innerHTML = Johnage2;
document.getElementById("johnclone").innerHMTL= Johnage;


/*if the selected value from the dropdown is add
    result 1= value1 + value2; 

    if the selected value from the dropdown is subtract
    result 1= value1 - value2; 

    if the selected value from the dropdown is multiply
    result 1= value1 * value2; 

    if the selected value from the dropdown is divide
    result 1= value1 / value2; 

    document.getElementById ("dropdownmenu").value; - need to get selected value
    from "dropdownmenu"
*/
