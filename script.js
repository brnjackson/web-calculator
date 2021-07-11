function calculate() {
    let a = Number (document.getElementById ("value1").value);
    let b = Number (document.getElementById ("value2").value);
    let operator = document.getElementById ("operator").value;

    let result=0;

    switch (operator){
        case "add":
            result = a + b;
          break;
        case "subtract":
            result = a - b;
          break;
        case "multiply":
            result = a * b;
          break;
        case "divide":
            result = a / b;


    }
    document.getElementById ("result1").innerHTML = result; 
}