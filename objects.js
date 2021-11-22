var miAuto = {
	marca: "Toyota",
	modelo: "Corola",
	annio: 2020,
	//Un atributo le objeto puedo ser una funcion del objeto
	detalleDelAuto: function (){
	//This es la forma de obtener valores del objeto global
		console.log(`Auto ${this.modelo} ${this.annio}`);
	}	
};
//Asi accedo al objeto
console.log(miAuto.marca);
miAuto.detalleDelAuto();
//ME va a mostrar Auto Corola 2020