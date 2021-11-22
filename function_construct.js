//Funcion constructora
//Se le pasan los prametros que generaran el objeto
function auto(marca,modelo,annio){
	this.marca = marca;
	this.modelo = modelo;
	this.annio = annio;
}

var autoNuevo = new auto("Tesla","Model 3",2020);
console.log(autoNuevo);

//Me muestra el objeto con sus valrores

var autoNuevo2 = new auto("Ford","Fiesta",2000);
var autoNuevo3 = new auto("Toyota","Corola",2020);