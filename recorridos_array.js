var articulos = [
	{
		nombre: "bici",
		costo: 3000
	},
	{
		nombre: "Tv",
		costo: 2500
	},
	{
		nombre: "Libro",
		costo: 320
	},
	{
		nombre: "Celular",
		costo: 10000
	},
	{
		nombre: "bici",
		costo: 3000
	},
	{
		nombre: "laptop",
		costo: 20000
	},
	{
		nombre: "Teclado",
		costo: 500
	},
	{
		nombre: "audifonos",
		costo: 1700
	},			
];

//Filter: filtrar elementos, valida si es cierto o falso y genera un nuevo array
//EL parametro articulo es el que va a permitir manipular al objeto
var articulosFiltrados = articulos.filter(function(articulo){
	return articulo.costo <= 500;
});
console.log(articulosFiltrados)

//Map: Permite mapear ciertos objetos, genera un nuevo array
// Permite mapear usar un sector del objeto en este caso nombre
//Asi no necesito hacwr un ciclo para recorrer el array sino que en un array nuevo obtengo eñl campo que se desea
var nombreArticulos = articulos.map(function(articulo){
	return articulo.nombre;
})
console.log(nombreArticulos);