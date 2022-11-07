/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


let numeroIntegrante = 0; 
 
let mensajesDeAlerta; //es un nodelist donde voy a cargar todos los tags que pueden contener el mensaje de "ingrese un numero valido"

function monitorearIntegranteExistente(){
 
  //Mientras siga habiendo al menos 1 input, mantengo habilitado el boton de Quitar integrantes 
  //(y Calcular lo mantengo en el estado que estaba, ya sea habilitado o deshabilitado.)
  //Si hay 0 inputs, desactivo Quitar integrantes y Calcular
  if (numeroIntegrante>0){
    document.querySelector("[id=quitar_integrante]").disabled = false;
   } else {
    document.querySelector("[id=quitar_integrante]").disabled = true;
    document.querySelector("[id=calculo_salarios]").disabled = true;
    }
  }

 monitorearIntegranteExistente();

document.querySelector("[id=agregar_integrante]").onclick = function() {
//agrega un input y un label para un integrante nuevo
    
  let divisor;
  let nuevoParrafo;
  let textoParrafo;
  let nuevoInput;
  let nuevoEm;

  numeroIntegrante++;
   
  const nodoPagina = document.querySelector("[id=integrantes_familia]");
  divisor = document.createElement("div");
  divisor.setAttribute("class", "integrante");
  divisor.setAttribute("style", "margin-bottom: 20px;");

  nuevoParrafo = document.createElement("label");
  textoParrafo = document.createTextNode("Salario del integrante: " + numeroIntegrante);
  nuevoParrafo.setAttribute("style", "padding-right: 20px;");
  nuevoParrafo.appendChild(textoParrafo);

  nuevoInput = document.createElement("input");
  //tenía tipo "number" pero me daba problemas en reconocer los espacios en RegExp
  nuevoInput.setAttribute("type", "string");

  nuevoInput.setAttribute("id", "salario_integrante" + numeroIntegrante);
  //a medida que se van ingresando caracteres en el input llama a la funcion validarSalario pasandole el numeroIntegrante
  nuevoInput.setAttribute("oninput", "validarSalario(" + numeroIntegrante + ")");

  //este em mostrará en rojo que el ingreso es un valor incorrecto
  nuevoEm = document.createElement("em");
  nuevoEm.setAttribute("id", "validar_salario_integrante" + numeroIntegrante);
  nuevoEm.setAttribute("style", "color: red;");

  divisor.appendChild(nuevoParrafo);
  divisor.appendChild(nuevoInput);
  divisor.appendChild(nuevoEm);
  nodoPagina.appendChild(divisor);

  monitorearIntegranteExistente();
}

document.querySelector("[id=quitar_integrante]").onclick = function() {
  //quita el ultimo div existente
  if (numeroIntegrante>0){
    //si no hay ninguno, no entra (daria error por "class=integrante" inexistente)
    let totalIntegrantes = document.querySelector("[id=integrantes_familia]").querySelectorAll("[class=integrante]");
    totalIntegrantes[totalIntegrantes.length-1].remove();
    numeroIntegrante--;
  }
  monitorearIntegranteExistente();
}

//valido que sean sólo numeros o espacios o nada (estos son los casos válidos)
function validarSalario(integranteAValidar){
  
  //extraigo el Value del integrante cuyo input está siendo modificado y lo testeo con RegExp
  let indice = "salario_integrante" + integranteAValidar;
  let salarioAValidar = document.querySelector("[id=integrantes_familia]").querySelector('#' + indice).value;
  let resultado = RegExp('^[0-9 ]+$').test(salarioAValidar);

  //muestro un mensaje en rojo si el texto ingresado no es válido
  //'alerta' hace referencia al em donde se mostrará el mensaje en rojo
  let alerta = "validar_salario_integrante" + integranteAValidar;
  if (resultado === true || salarioAValidar.length == 0) {
    document.querySelector("[id=integrantes_familia]").querySelector('#' + alerta).innerText = "";
  } else {
    document.querySelector("[id=integrantes_familia]").querySelector('#' + alerta).innerText = "Ingrese un número válido";
     
    //si hay un input incorrecto, activo el bloqueo del botón Calcular
    document.querySelector("[id=calculo_salarios]").disabled = true;
  }

  mensajesDeAlerta = document.querySelector("[id=integrantes_familia]").querySelectorAll("em");
  //por defecto activo el boton de Calcular
  //pero si en el nodelist de em's que muestran el mensaje de alerta, encuentro algun mensaje siendo mostrado,
  //lo vuelvo a desactivar
  document.querySelector("[id=calculo_salarios]").disabled = false;
  mensajesDeAlerta.forEach(
    function(nodo){
      if (nodo.textContent != ""){
        document.querySelector("[id=calculo_salarios]").disabled = true;
      }
    }
  ); 
  }

document.querySelector("[id=calculo_salarios]").onclick = function() {
  
  let inputs_salarios = document.querySelector("[id=integrantes_familia]").querySelectorAll('input');
  //arraySalarios cargará los valores numéricos extraídos del nodelist inputs_salarios
  let arraySalarios = [];
  
  //si no hay divs creados, sale de la funcion de calculo (para no mostrar los em's con NaN)
  if (inputs_salarios.length == 0){return false;}
  
  //Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  //entonces cargo en arraySalarios sólo los inputs que tengan un valor ingresado
  
  //aca lo intenté hacer con un forEach pero en un NodeList me toma los inputs vacios tambien
  /*
  inputs_salarios.forEach(
    function(sueldo){
      arraySalarios.push(sueldo.value);
    }
  );
  */
   
  //lo hago así 
   
  for (let i=0; i<inputs_salarios.length; i++){
    if (inputs_salarios[i].value > 0){
      arraySalarios.push(Number(inputs_salarios[i].value));
    }  
  }
  
  //si todos los inputs son vacios, salgo de la funcion para no hacer las funciones de calculo
  //lo que mostraría NaN en los resultados
  if (arraySalarios.length === 0){return false;}

  document.querySelector("#mayor_salario_anual").innerText = 
  `El mayor salario anual del grupo familiar es ${calcularMayorSalarioAnual(arraySalarios)}`;

  document.querySelector("#menor_salario_anual").innerText = 
  `El menor salario anual del grupo familiar es ${calcularMenorSalarioAnual(arraySalarios)}`;

  document.querySelector("#salario_anual_promedio").innerText = 
  `El salario anual promedio del grupo familiar es ${calcularSalarioAnualPromedio(arraySalarios)}`;

  document.querySelector("#salario_mensual_promedio").innerText = 
  `El salario mensual promedio del grupo familiar es ${calcularSalarioAnualPromedio(arraySalarios)/12}`;
 
}

function calcularMayorSalarioAnual(arraySalarios){
  let mayorSalarioAnual = 0;
  for (i=0; i<arraySalarios.length; i++){
    if (arraySalarios[i] > mayorSalarioAnual){
      mayorSalarioAnual = arraySalarios[i];
    }
  }
  return mayorSalarioAnual;
}
 
function calcularMenorSalarioAnual(arraySalarios){
  let menorSalarioAnual = arraySalarios[0];
  for (i=0; i<arraySalarios.length; i++){
    if (arraySalarios[i] < menorSalarioAnual){
      menorSalarioAnual = arraySalarios[i];
    }
  }
  return menorSalarioAnual;
}

function calcularSalarioAnualPromedio(arraySalarios){
  let acumula = 0;
  for (i=0; i<arraySalarios.length; i++){
    acumula = acumula + arraySalarios[i];
  }
  return acumula/arraySalarios.length;
}
  
document.querySelector("[id=borrar]").onclick = function(){
    
  //borra los resultados de los cálculos y también los mensajes de alerta en rojo
  //(todos son elementos <em>) (aunque los mensajes en rojo se borran al borrar los divs clase ".integrante")
  let mensajesConResultados = document.querySelectorAll("em");
  mensajesConResultados.forEach(function(emABorrar){emABorrar.innerText=""});
  
  //elimino los divs donde se cargaban los salarios (todos fueron creados con clase "integrante")
  let elementosDiv = document.querySelector("[id=integrantes_familia]").querySelectorAll(".integrante");
  elementosDiv.forEach(function(divsABorrar){divsABorrar.remove()});

  numeroIntegrante = 0;
  monitorearIntegranteExistente();
}