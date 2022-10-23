//cada vez que se carga la pagina, carga 15 numeros aleatorios distintos
window.onload = function() {
	cargarAleatoriamenteLaLista();
}

function cargarAleatoriamenteLaLista(){
	const lista_tags1 = document.querySelectorAll("li");
	//cargo en cada posicion del nuevo array solamente el numero (innerText) dentro de cada tag
	for (let b=0; b<lista_tags1.length; b++) {
		lista_tags1[b].innerText = Math.ceil(Math.random()*100);
	}
}

//boton para cargar de nuevo una lista aleatoria en tiempo de ejecucion
document.querySelector("[id=generar_numeros]").onclick = function() {
	cargarAleatoriamenteLaLista();
}

//en la linea inferior, el formulario es reconocido por su id
document.querySelector("[id=calculos]").onclick = function() {

	// Convertir esos números a un array y:
	const lista_tags = document.querySelectorAll("li");
	var lista_numeros = new Array(lista_tags.length);

	//cargo en cada posicion del nuevo array solamente el numero (innerText) del array
	for (let a=0; a<lista_numeros.length; a++) {
		lista_numeros[a] = Number(lista_tags[a].innerText);
	}

	// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
	function calcularPromedio() {
		let suma = 0;
		for (let i=0; i < lista_numeros.length; i++) {
			suma = suma + lista_numeros[i];
		}
		return(suma / lista_numeros.length);
	}
	document.querySelector("#texto_promedio").innerText = `El promedio de los numeros es ${calcularPromedio()}`;

// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
/*acotacion mia: para obtener el numero mas pequeño tenemos que comenzar a comparar desde el numero mas alto
y como aun no sabemos cual es el numero mas alto, primero hacemos la funcion de obtener el numero mas alto
(que se obtiene comenzando a comparar desde el numero mas pequeño, que en nuestro caso vamos a poner 0, 
asumiendo que son numeros enteros reales positivos.
*/

// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
//acotacion mia: lo hacemos comparando desde el 0, asumiendo que no hay numeros negativos
	let numero_grande = 0; //lo defino afuera para que sea global y poder usarlo en el ejercicio 2
						
	function calcularNumeroMasGrande() {
		for (i=0; i<lista_numeros.length; i++) {
			if (lista_numeros[i] > numero_grande) {
				numero_grande = lista_numeros[i];
			}
		}
		return numero_grande;
	}
	document.querySelector("#texto_grande").innerText = `El numero mas grande es ${calcularNumeroMasGrande()}`;


// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
//ahora si, teniendo el numero mas grande, busco el mas chico partiendo de ese.
//de hecho no importa en que orden declare las funciones sino en que orden las llame para mostrarlas en el html 

	function calcularNumeroMasChico() {
		let numero_pequenio;
		for (i=0; i<lista_numeros.length; i++) {
			if (lista_numeros[i] < numero_grande) {
				numero_pequenio = lista_numeros[i];
				numero_grande = numero_pequenio;
			}
		}
		return numero_pequenio;
	}
	document.querySelector("#texto_pequenio").innerText = `El numero mas pequeño es ${calcularNumeroMasChico()}`;

// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado 
//con el texto "El número más frecuente es..."
	var  numero_repetido = new Array()
	function calcularNumeroMasFrecuente() {
		let cantidad_repeticiones = 0;
		for (i=0; i < (lista_numeros.length-1); i++) {
			for (a = 1; a < lista_numeros.length; a++) {
				if (lista_numeros[i] === lista_numeros[a] && a != i) {
					numero_repetido[cantidad_repeticiones] = lista_numeros[i];
					cantidad_repeticiones++;
				}
			}
			cantidad_repeticiones = 0;	
		}
		return;
	}
	calcularNumeroMasFrecuente();


//cuando no hay numero frecuente aparece undefined, poner un if
	if (numero_repetido.length != 0) {
		document.querySelector("#texto_frecuente").innerText = `El numero mas frecuente es ${numero_repetido[0]} y se repite ${numero_repetido.length + 1} veces.`;
	} else {
		document.querySelector("#texto_frecuente").innerText = `Ningun numero se repite. Todos son unicos.`;
	}

}
