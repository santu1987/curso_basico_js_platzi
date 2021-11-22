var frutas = ["Manazana","Plátano","Cereza","fresa"];

console.log(frutas.length); //Para ver la longitud del array

//para acceder a cada uno de los elementos
console.log(frutas[0]);//Elemento de la lista

//agregar elementos al final del array
var masFrutas = frutas.push("Naranja");

//quitar elementos: Elimina un elemento del array
var ultimo = frutas.pop("Naranja");

//Agregar valor al inicio del array
var nuevaLongitud = frutas.unshift("Pera");

//Elimina un valor que esta al inicio de la posicion
var nuevaLongitud = frutas.shift("Pera")

//Obtener la posicion del elemento
var posicion = frutas.indexOf("cereza");
