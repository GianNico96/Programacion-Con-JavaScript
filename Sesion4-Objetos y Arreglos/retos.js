//reto 1: Calcular Promedio

/*function calculateAverage(numbers) {
    let sum = 0;
    let finalAverage = 0;

    for(let i = 0; i<numbers.length; i++){

       sum = sum + numbers[i];
       finalAverage = sum / numbers.length;
    }

    return finalAverage.toFixed(2);
}

let num = [10,7,8,9,9,9,6,10,7]
let result = calculateAverage(num);

console.log(result);*/


//Reto 2 Arreglo a objeto

/*let arry = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];

function arrayObject(array) {
    let objeto = {};
    
    for(let i = 0; i < array.length; i++) {
        este es para la propiedad y el segundo para el valor es otro arreglo
        objeto[array[i][0]] = array[i][1];
    }

    return objeto;
}


let result = arrayObject(arry);
console.log("Object :",result);*/

//Reto 3 Extraer una lista de propiedades

let singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

function pluck(list, propertyName) {
    let listValues = [];

    for(let elements in list) {
        listValues.push(list[elements][propertyName]);
    }
    return listValues;
}

console.log('Name :', pluck(singers,'name'));
console.log('Band :',pluck(singers,'band'));
console.log('Born :',pluck(singers,'born'));