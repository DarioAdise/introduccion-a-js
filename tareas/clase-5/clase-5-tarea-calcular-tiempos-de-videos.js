let numero_video = 1;
   
document.querySelector("#numero_video").innerText = numero_video;

let horas_totales = 0;
let minutos_totales = 0;
let segundos_totales = 0;

document.querySelector("[id=sumar_tiempo_video]").onclick = function() {
   
    horas_totales = horas_totales + Number(document.querySelector("#horas_duracion").value);
    minutos_totales = minutos_totales + Number(document.querySelector("#minutos_duracion").value);
    segundos_totales = segundos_totales + Number(document.querySelector("#segundos_duracion").value);
   
    if (segundos_totales> 59) {
        minutos_totales++;
        segundos_totales = segundos_totales - 60;
    }
    if (minutos_totales> 59) {
     horas_totales++;
     minutos_totales = minutos_totales - 60;
    }
    numero_video++;
    document.querySelector("#numero_video").innerText = numero_video;

    document.querySelector("#horas_duracion").value = "";
    document.querySelector("#minutos_duracion").value = "";
    document.querySelector("#segundos_duracion").value = "";

return false;

}

document.querySelector("[id=calcular_tiempo_total]").onclick = function() {
 
    document.querySelector("#tiempo_total").innerText = 
    `Hay un total de ${numero_video} videos con una duración de ${horas_totales} horas, ${minutos_totales} minutos y ${segundos_totales} segundos.`;

return false;

} 
  