/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("[id=mostrar_formularios]").onclick = function() {
 
    let cantidadIntegrantes = document.querySelector("#cantidad_integrantes").value;
    //validar cantidad integrantes
    if (cantidadIntegrantes <= 0){
      alert("La cantidad de integrantes no puede ser menor a 0");
      return false;
    }
    if (cantidadIntegrantes > 10){
      alert("Lo siento, la cantidad de integrantes no puede ser mayor a 10");
      return false;
    }

    //disablo el button
    document.getElementById("mostrar_formularios").disabled = true;
    desplegarFormularioEdades(cantidadIntegrantes);    

}

function desplegarFormularioEdades(cantidadIntegrantes){
    let nuevoInput = "";
    let nuevoParrafo = "";
    let textoParrafo = "";
   
    let divisor = ""; 
    const nodoPagina = document.querySelector("[id=formulario_ingreso_edades]");
  
    for (let i = 1; i <= cantidadIntegrantes; i++) {
      
        divisor = document.createElement("div");
        divisor.setAttribute("class", "integrante");

        nuevoParrafo = document.createElement("label");
        textoParrafo = document.createTextNode("Edad del integrante: ");
        nuevoParrafo.appendChild(textoParrafo);

        nuevoInput = document.createElement("input");
        nuevoInput.setAttribute("type", "number");
        nuevoInput.setAttribute("id", "edadIntegrante" + i);
        
        divisor.appendChild(nuevoParrafo);
        divisor.appendChild(nuevoInput);
        nodoPagina.appendChild(divisor);
    }
}
 
//ACLARACION MIA: ESTO FUNCIONA PERO VOY A HACERLO COMO EN EL CURSO
/*
let i=1;
 while (i<= cantidadIntegrantes) {
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("Placeholder", "Name_" + i);
y.setAttribute("Name", "Name_" + i);
document.getElementById("formulario_ingreso_edades").appendChild(y);
i++;
}
*/



document.querySelector("[id=calculo_edades]").onclick = function() {

//validar edades
let cajas = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll("input");
let senial = 0;

for (i=0; i<cajas.length;i++){
  
  if (cajas[i].value <1 || cajas[i].value > 120){
    alert("Debe ingresar una edad entre 1 y 120");
    senial = 1;
		return false;
  }
}
if (senial == 0){
  realizarCalculos();
}
}

function realizarCalculos(){
cajas = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll("input");
let edades = [];
for (i=0; i<cajas.length; i++){
  edades[i] = Number(cajas[i].value);
}

//calcular la edad mas grande
let edad_grande = 0; //lo defino afuera para que sea global y poder usarlo en el ejercicio 2
						
function calcularMayorEdad() {
		for (i=0; i<edades.length; i++) {
			if (edades[i] > edad_grande) {
				edad_grande = edades[i];
			}
		}
		return edad_grande;
	}
	

function calcularMenorEdad(){
  let edad_menor;
  for (i=0; i<edades.length; i++){
    if (edades[i] <= edad_grande){
      edad_menor = edades[i];
      edad_grande = edad_menor;
    }
  }
  return edad_menor;
}

function calcularPromedioEdad(){
  let suma_edades = 0;
  for (i=0; i<edades.length; i++){
    suma_edades = suma_edades + edades[i];
  }
  return suma_edades / edades.length;
}



document.querySelector("#mayor_edad").innerText = `La mayor edad del grupo familiar es ${calcularMayorEdad()}`;
document.querySelector("#menor_edad").innerText = `La menor edad del grupo familiar es ${calcularMenorEdad()}`;
document.querySelector("#promedio_edad").innerText = `El promedio de edad del grupo familiar es ${calcularPromedioEdad()}`;

}



borrar.onclick = (e)=> { 
 
  //vuelvo a activar el boton de mostrar formularios
  document.getElementById("mostrar_formularios").disabled = false;

  let ems = document.querySelectorAll("em");
  for (i=0; i < ems.length; i++){
    ems[i].innerText = "";
  }
  
  document.getElementById('formulario_cantidad_integrantes').reset();

let elementos = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll(".integrante");

for (i=0; i<elementos.length; i++){
  elementos[i].remove();
}

}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
