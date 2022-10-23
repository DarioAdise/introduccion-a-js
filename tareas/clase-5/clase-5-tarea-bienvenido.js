//segunda tarea clase 5

document.querySelector("#enviar_informacion").onclick = function() {
	
	let primer_nombre_js = document.querySelector("#primer_nombre").value;
	let segundo_nombre_js = document.querySelector("#segundo_nombre").value;
	let apellido_js = document.querySelector("#apellido").value;
	let edad_js = document.querySelector("#edad").value;
	
	//validar edad
	let pasa = validarEdadUsuario(edad_js);
	if (pasa === false) {return false;}

    //validar que se hayan ingresado sólo letras en los campos de nombre
	pasa = son_letras(primer_nombre_js);
	if (pasa === false) {return false;}
	
	pasa = son_letras(segundo_nombre_js);
	if (pasa === false) {return false;}
	
	pasa = son_letras(apellido_js);
	if (pasa === false) {return false;}
 
//pasar a mayusculas la primer letra de cada nombre
primer_nombre_js = primer_nombre_js.charAt(0).toUpperCase() + primer_nombre_js.slice(1);
segundo_nombre_js = segundo_nombre_js.charAt(0).toUpperCase() + segundo_nombre_js.slice(1);
apellido_js = apellido_js.charAt(0).toUpperCase() + apellido_js.slice(1);

//chequear sexo (lo hago despues de poner mayuscula para que en el saludo tambien aparezca el nombre en mayuscula
let genero_a_poner; 
(document.querySelector("#formulario").sexo.value == "masculino") ? genero_a_poner = "o" : genero_a_poner = "a";
document.querySelector("#genero_saludo").innerText = `${genero_a_poner}, ${primer_nombre_js}`;

let texto_parrafo = `Hola, sos ${primer_nombre_js} ${segundo_nombre_js} ${apellido_js} y tenes ${edad_js} años!`;
	
const nodoPagina = document.querySelector("body");
const nuevoParrafo = document.createElement("p");
const textoParrafo = document.createTextNode(texto_parrafo);
	
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo);
	
//este return false hace que se cancele el envio del formulario
//para que la informacion siga en pantalla y no se recargue vacio (algo asi)
return false;
	
}
