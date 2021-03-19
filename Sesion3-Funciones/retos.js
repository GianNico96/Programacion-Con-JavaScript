//Reto 1: Potenciación

function power(base,exponent) {
    let resp = 1;

    for(let i = 0; i < exponent; i++) {
        resp = resp * base; 
    }
    return resp;
}

var result = power(3,3);
console.log(result);

// Reto 2

(function getLargerInt(number1,number2) {

    if(number1>number2){
        console.log("Número mayor " + number1);
    }else{
        console.log(number2);
    }
})(3,1);

//reto 2 con operador ternario

function getLargerInt(numberOne,numberTwo) {

    return numberOne>numberTwo ? " Número mayor es: " + numberOne : numberTwo;
} 

console.log(getLargerInt(20,8))

// Reto 3 Recursive funtion

//Memoization
function fibonacciSequence(limit) {
    
    if(limit < 1 && limit == 0){

        console.log("El limite debe ser mayor a 0");
    }

    var fibonacci = function(number) {
    
        if (number <= 1) {
            return 1;
        }
            return fibonacci(number- 1) + fibonacci(number - 2);
    }
    
    for(var i = 0; i < limit; i++){
        console.log(fibonacci(i));
    }
}

var result = fibonacciSequence(6);
console.log(result);




