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
//Find: devuelve true o false de la busqueda, solo devuelve un objeto segun lo señalado a diferencia del filter que devuelve una matriz de regitros coincidentes
//Devuelve dentro de un nuevo arreglo no midifica ni muta el original
var encuentraArticulo = articulos.find(function(articulo){
	return articulo.nombre ==="laptop";
});
console.log(encuentraArticulo);

//Foreach: filtrar sobre el array original sin modificarlo, lo recorre
//No muta el arreglo original
articulos.forEach(function(articulo){
	console.log(articulo.nombre)
})

//Some: retorna true o false para los objetos que cumplan con una condicion
//Trae un nuevo array
// Existen articulos baratos el dice si o no
var articulosBaratos = articulos.some(function(articulo){
	return articulo.costo <= 700;
});
console.log(articulosBaratos);