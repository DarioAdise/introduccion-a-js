/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("[id=mostrar_formularios]").onclick = function() {
  
    let cantidadIntegrantes = document.querySelector("[id=cantidad_integrantes]").value;
    //validar cantidad integrantes
    if (cantidadIntegrantes < 1){
      document.querySelector("[id=validacion_cantidad_integrantes").innerText =
        "La cantidad de integrantes no puede ser menor a 1";
      return false;
    }
    if (cantidadIntegrantes > 10){
      document.querySelector("[id=validacion_cantidad_integrantes").innerText =
        "Lo siento, la cantidad de integrantes no puede ser mayor a 10";
      return false;
    }
    //si pasa las validaciones borro el cartel de advertencia
    document.querySelector("[id=validacion_cantidad_integrantes").innerText = "";

    //inhabilito el boton de mostrar formularios mientras haya inputs validos para trabajar
    document.querySelector("[id=mostrar_formularios]").disabled = true;

    //activo el botón de realizar calculos porque se ingreso una cantidad de inputs validos
    document.querySelector("[id=calculo_edades]").disabled = false;
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
let inputsConEdades = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll("input");
let edadesValidadas = true;

for (i=0; i<inputsConEdades.length;i++){
  
  if (inputsConEdades[i].value <1 || inputsConEdades[i].value > 120){
    alert("Debe ingresar una edad entre 1 y 120");
    edadesValidadas = false;
		return false;
  }
}
if (edadesValidadas === true){
  realizarCalculos();
}
}

function realizarCalculos(){
  inputsConEdades = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll("input");
  let edades = [];

  for (i=0; i<inputsConEdades.length; i++){
    edades[i] = Number(inputsConEdades[i].value);
  }

  document.querySelector("#mayor_edad").innerText = `La mayor edad del grupo familiar es ${calcularMayorEdad(edades)}`;
  document.querySelector("#menor_edad").innerText = `La menor edad del grupo familiar es ${calcularMenorEdad(edades)}`;
  document.querySelector("#promedio_edad").innerText = `El promedio de edad del grupo familiar es ${calcularPromedioEdad(edades)}`;
}

//calcular la edad mas grande

						
function calcularMayorEdad(edades) {
  let edadGrande = 0; 
  for (i=0; i<edades.length; i++) {
    if (edades[i] > edadGrande) {
      edadGrande = edades[i];
    }
  }
  return edadGrande;
}

function calcularMenorEdad(edades){
  
  let edadMenor = 0;
  //edadMenor = Math.min.apply(Math, edades); //este es un metodo de js que funciona perfecto

  // lo hago "a pata"
  edadMenor = edades[0];
  for (i=0; i<edades.length; i++){
    if (edades[i] < edadMenor){
      edadMenor = edades[i];  
    }
  }
  return edadMenor;
}

function calcularPromedioEdad(edades){
  let sumaEdades = 0;
  for (i=0; i<edades.length; i++){
    sumaEdades = sumaEdades + edades[i];
  }
  return sumaEdades / edades.length;
}

borrar.onclick = (e)=> { 
 
  //vuelvo a activar el boton de mostrar formularios
  document.querySelector("[id=mostrar_formularios]").disabled = false;

  //vuelvo a disablear el boton de realizar calculos de edades
  document.querySelector("[id=calculo_edades]").disabled = true;

  //esto tambien borra el em validacion_cantidad_integrantes en caso que se presione Borrar
  //con ese em mostrando un mensaje
  let tagsEmsConResultados = document.querySelectorAll("em");
  for (i=0; i < tagsEmsConResultados.length; i++){
    tagsEmsConResultados[i].innerText = "";
  }
  
document.querySelector("[id=formulario_cantidad_integrantes]").reset();

let tagsDivsConEdadesIntegrantes = document.querySelector("[id=formulario_ingreso_edades]").querySelectorAll(".integrante");

for (i=0; i<tagsDivsConEdadesIntegrantes.length; i++){
  tagsDivsConEdadesIntegrantes[i].remove();
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
