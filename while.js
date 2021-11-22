var estudiantes = ["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

//while: mientras hay elementos en el array estudiantes se ejecuta el ciclo
while(estudiantes.length > 0){
	//Usamos el metodo de mutacion shift
	//saco del arreglo de estudiantes e ingreso el nombre a la variable estudiante
	var estudiante = estudiantes.shift();
	saludarEstudiantes(estudiante);
}