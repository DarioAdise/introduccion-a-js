
calculo_salario_mensual.onclick = function() {

  const salario_anual_js = document.querySelector("#salario_anual").value;
    var salario_mensual_js = salario_anual_js / 12;
    document.querySelector("#salario-mensual").value = salario_mensual_js;
    return false;
}
  

