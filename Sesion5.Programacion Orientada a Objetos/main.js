

//Reto 1
//Expresión de función
//Constructor
/*var Vec = function(x, y) {
  this.x = x;
  this.y = y;
}
//Crear metódos
Vec.prototype.plus = function(otherVec){
  //Crear nuevo vector con la suma 
  return new Vec(this.x + otherVec.x , this.y + otherVec.y);
}

Vec.prototype.minus = function(otherVec){
  return new Vec(this.x - otherVec.x, this.y - otherVec.y);
}
//Teorema de pitágoras raiz de a2 + b2
Vec.prototype.length = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y)
} 

//Instancias
var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979 */


//Reto 2 Group
/*var Group = function() {
    this.arrayPeople = [];
}

Group.prototype.add = function(value){
    if(!this.has(value)){
        this.arrayPeople.push(value);
    }
}
Group.prototype.has = function(value){
    return this.arrayPeople.includes(value);
}

Group.from = function(array){
  var newGroup = new Group();
  for(var i = 0; i < array.length; i++) {
    newGroup.add(array[i]);
  }
  return newGroup;
}


var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true*/


//Reto 3 Perímetro

var Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function(){ 
    return this.a + this.b + this.c;
}

var triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6