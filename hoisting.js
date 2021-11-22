hey();
function hey(){
	console.log("Este es mi nombre"+ miNombre);
}

var miNombre = "Gianni";

/*
	El resultado del console.log es undefined, debido a que la variable la declare al final y se aplica el hoisting para la función pero no para la variable, las buenas practicas indican que las variables deben estar declaradas primero, luego las funciones y luego los llamados
*/	