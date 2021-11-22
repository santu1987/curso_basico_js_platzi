var estudiantes = ["maria","sergio","rosa","daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}


//Loops
//For
for(var i=0; i < estudiantes.length; i++){
	console.log(estudiantes[i]);
	saludarEstudiantes(estudiantes[i]);
}
//For of
//Segundo ejemplo de for: parecido a un foreach, por cada uno.
for(var estudiante of estudiantes){
	saludarEstudiantes(estudiante);	
}