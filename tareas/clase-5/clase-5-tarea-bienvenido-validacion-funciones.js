//validar edad usuario
function validarEdadUsuario(edad_js) {

    if (edad_js <1 || edad_js > 120) {
        //ingresos_ok = false;
        alert("Debe ingresar una edad entre 1 y 120");
        document.querySelector("#edad").focus();
        return false;
    }
}
        
//validar que solo se hayan ingresado letras en los campos de nombre    
function son_letras(str) {
    var regex = /^[a-zA-Z]+$/;
    if(!regex.test(str)){
        alert("Alguno de los campos es incorrecto"); 
        return false;
    }
} 