// Ejemplo 1: Mutando Objetos.

//Crear el objeto car.
/*var car = {
    brand:'Nissan',
    model:'Sentra',
    year:'2020'
};

/**Crear función que agregue la propiedad color al auto*/

/*function addColor(color) {
    car.color = 'Black'

    return car;
}

/**Ahora llamamos a la función pasándole el objeto car 
 * y guardamos en resultado en otra variable. */


/*console.log('Before calling addColor()', car); //Aquí mostramos en consola el objeto car antes pasarale la función addColor.

var sameCar = addColor(car); //Se asigna en una nueva variable a la función.

console.log('After calling addColor()', car); //En este caso se puede observar que el objeto Car ha sido mutado.

console.log('After calling addColor()', sameCar);// Se muestra en consola el resultado despues de llamar la función.

/**Por ende podemos notar que el objeto car y la variable sameCar
* tienen las misma propiedad Color.
*/
//console.log('Same car?', car === sameCar); // true, */

//Conclusión
/**La función addColor muta el objeto car que recibe. 
 * La primera vez que mostramos en consola vemos que no existe la propiedad color, 
 * después de llamar a la función vemos la propiedad en ambos objetos. */

/**El objeto retornado por addColor es el mismo que recibió.
 *  Ambas variables, tanto car como sameCar están apuntando al mismo objeto en memoria. */

/**Función addColor que no hace la mutabilidad del objeto que recibe. */
/*function addColor(car) {
    var newCar = Object.assign({}, car, {
      color: 'Black'
    });
  
    return newCar;
  }/*

/*console.log('Before calling addColor()', car);

var newCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', newCar);

console.log('Same car?', car === newCar); // false */

//Ejemplo 2: Creando funciones puras.

/*var cart = [
    {
      item: 'Laptop',
      quantity: 1
    }
  ]

  function addItemToCart(cart, item, quantity) {
    var newCart = cart.map(function(element) {
      return element;
    });
  
    newCart.push({
      item: item,
      quantity: quantity
    })
  
    return newCart;
  }


cart = addItemToCart(cart, 'Phone', 1);

console.log(cart);*/


//Reto 1:Flatten
  function flatten(arrays) {
    return arrays.reduce(function(accumulator, current) {
        return accumulator.concat(current);
      },[]);
  }

  var arrays = [[1, 2, 3], [4, 5], [6]];
  var array = flatten(arrays);
  
  console.log(array); // [1, 2, 3, 4, 5, 6]

  //Reto 2: Compact
  /*function compact(array) {
    return array.filter(function(Boolean){
        
    })
  }
  var array = [0, 1, false, 2, '', 3];
  var compactedArray = compact(array);

  console.log(compactedArray); // [1, 2, 3]*/

  //Reto 3
/*  function loop(start, test, update, body) {
    for (var value = start; test(value); value = update(value)) {
      body(value);
    }
  }

  var test = function(n) {
    return n > 0;
  }
  
  var update = function(n) {
    return n - 1;
  }

  
loop(3, test, update, console.log);*/

