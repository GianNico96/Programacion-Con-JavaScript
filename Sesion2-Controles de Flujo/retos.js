/** Retos */

//Reto 1: Operadores lógicos - if/else

var time = 23;
var greeting;

if(time >= 0 && time <= 12)
{
  greeting = "Good morning";
}else if(time >= 12 && time <= 20){
    greeting = "Good afternoon"
}
else if(time >= 20 && time <= 24){
    greeting = "Good evening"
}else{
    greeting = "invalid time"
}

console.log(greeting);


// Reto 2: Números pares

for(let i = 0; i <= 100; i++) {
    if( i % 2 === 0 ) {
      console.log(i);
    }
}

// Reto 3: Números primos

for(let i = 2; i <= 100; i++) {
    if( i % 2 === 1 ) {
      console.log(i);
    }
}

for (let counter = 2; counter <= 100; counter++) {
    var number = true;
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        number = false;
      }
    }
    if(nunber) {
      console.log(counter);
  }
}