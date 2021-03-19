//Ejemplos

//Ej: 1
var time = 13;
var greeting;

if (time < 12) {
  greeting = "Good morning";
}

if (time < 20) {
  greeting = "Good afternoon";
}

if (time >= 20) {
  greeting = "Good evening";
}

console.log(greeting) // Good afternoon



//Ej 2 : Usuando switch

var day = 1;
var text;

switch(day){
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 3:
        text = "Tuesday";
        break;
    case 4:
        text = "Wednesday";
        break;
    case 5:
        text = "Thursday";
        break;
    case 6:
        text = "Friday";
        break;
    case 7:
        text = "Saturday";
        break;
    default:
        text = "Error";
}

console.log(text);



//Operador ternario

var speed = 120;
var message;

if(speed > 100){
    message = "You're going too fast!";
}else {
    message = "Under the limit";
}

var message = speed > 100 ? "You're going too fast!" : "Under the limit";

console.log(message);


//Ej 3: ciclo for

for(var i = 0; i<=200; i++){
    console.log("Hello World");
}

//ciclo while

var i = 0;

while(i <= 200) {
	console.log("Hello World");
	i++;
}