// Ejemplos 

function calculateAge(birthYear) {
    let Age = 2021-birthYear;
    return Age;
}

var result = calculateAge(1996);
document.write(result);

function yearsUntilRetirement(year, name) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    document.write(name + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1985,'Juan');

//Declaracion de función
//Sentencia de función

//Ejemplo 2 Expresión de función
 var whatDoYouDo = function (job, name) {
     switch(job){
         case 'developer':
             return name + 'develops cool apps'
         case 'designer':
             return name + 'designs awesome websites'
         default:
             return name + 'does something else'
     }
 }

 console.log(whatDoYouDo('developer','jane'));

// Está función es anónima es decir que no tiene un nombre 
var square = function(number) {
	return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); 

//está función también puede tener un nombre para referirse a sí mismas,
var factorial = function fac(number) {
	return number < 2 ? 1 : number * fac(number - 1)
}

console.log(factorial(5)); 

