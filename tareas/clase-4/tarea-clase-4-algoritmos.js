//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
 */
console.log("\nDesafío 1: Numeros del 10 al 1, en ese orden");
for (let i=10; i>0; i--){
  console.log(i);
}

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
*/
console.log("\nDesafío 2: Numeros impares del 1 al 100");
for (i=1; i<100; i=i+2){
  console.log(i);
}


/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/
console.log("\nDesafío 3: Tabla de multiplicacion del 7");
const SIETE = 7;
 for (i=0; i<=10; i=i+1){
  console.log(i*SIETE);
 }

 /*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

console.log("\nDesafío 4: Tablas de multiplicacion del 1 al 10");

let multiplicando = 0;
let multiplicador = 0;
let linea = "";

for (multiplicando=1; multiplicando <=10; multiplicando++){
  for (multiplicador=1; multiplicador <=10; multiplicador++){
    linea = linea + "\t " + (multiplicando * multiplicador);
  }
  console.log ("Tabla del " + multiplicando + ": " + linea);
  linea = "";
}

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/

const MATRIZ = [];
let total = 0;
for (i=0; i<=9; i++){
  MATRIZ.push(i+1); //en la celda 0 pone 1, y asi.
  total = total + MATRIZ[i];  
}
console.log("\nDesafío 5: La suma de los numeros del 1 al 10 es: " + total);

/*
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
*/

let resultado = 1;
for (i=2; i<=10; i++){
  resultado = resultado * i;
}
console.log("\nDesafío 6: El factorial de 10 es: " + resultado);

/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

resultado = 0;
for (i=11; i<=30; i=i+2){
  resultado = resultado + i;
}
console.log("\nDesafío 7: El resultado de la suma de todos los numeros impares entre 10 y 30 es " + resultado);

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/
//formula: ((C° * 9) / 5) + 32)
//let gradosCelsius = prompt("Por favor, ingrese los grados Celsius a convertir a Fahrenheit: ", 0);

gradosCelsius = 0;
function convertirCelsiusAFahrenheit(gradosCelsius) {
  return (((gradosCelsius * 9) / 5) + 32);
}
console.log(`\nDesafío 8: ${gradosCelsius} grados Celsius equivalen a ${convertirCelsiusAFahrenheit(gradosCelsius)} grados Fahrenheit`);

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/
//formula: (1 °F − 32) × 5/9

let gradosFahrenheit = 32;
function convertirFahrenheitACelsius(gradosFahrenheit){
  return (((gradosFahrenheit - 32) * 5) / 9);
}
console.log(`\nDesafío 9: ${gradosFahrenheit} grados Fahrenheit equivalen a ${convertirFahrenheitACelsius(gradosFahrenheit)} grados Celsius`);

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/
const NUEVA_MATRIZ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

resultado = 0;

for (i=0; i<NUEVA_MATRIZ.length; i++){
  resultado = resultado + NUEVA_MATRIZ[i];
}
console.log("\nDesafío 10: El resultado de la suma de los elementos de la matriz " + NUEVA_MATRIZ + " es: " + resultado);

/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

let promedio = 0;
function calcularPromedioArray(){
  for (i=0; i<NUEVA_MATRIZ.length; i++){
    promedio = promedio + NUEVA_MATRIZ[i];    
  }
  return (promedio / NUEVA_MATRIZ.length);
}
console.log("\nDesafío 11: El promedio de los elementos del array es: " + calcularPromedioArray());

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

*/
console.log("\nDesafío 12: devolver un array con los valores positivos de otro array")
//cargo la matriz con 10 valores enteros aleatorios del -10 al 10
const MATRIZ_ENTERA = [];

for (i=0; i<10; i++){
  MATRIZ_ENTERA[i] = Math.ceil(Math.random()*(10 - (-10))+ (-10));
}

let matriz_positivos = MATRIZ_ENTERA.filter(numero => numero > 0);

console.log("Matriz original: " + MATRIZ_ENTERA);
console.log("Matriz de solo positivos: " + matriz_positivos);

/*
Desafío de programación #13: Find the maximum number in an array of numbers

*/
let mayor_valor = 0;
for (i=0; i<MATRIZ_ENTERA.length; i++){
  if (MATRIZ_ENTERA[i] > mayor_valor){
    mayor_valor = MATRIZ_ENTERA[i];
  }
}
console.log("\nDesafío 13: El valor más alto de la matriz original es: " + mayor_valor);

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

console.log("\nDesafio 14: Primeros 11 numeros de la sucesión de Fibonacci:");

let nuevo_numero = 0;
let numeroFibonacci = [0, 1];
let digito = numeroFibonacci.length;

console.log(numeroFibonacci[0]);
console.log(numeroFibonacci[1]);

function calcularNumeroFibonacci(digito){
  if (digito <= 10) { 
    nuevo_numero = numeroFibonacci[digito-1] + numeroFibonacci[digito-2];
    numeroFibonacci.push(nuevo_numero);
    console.log(numeroFibonacci[digito]);
    digito = digito + 1;
    calcularNumeroFibonacci(digito); 
  }  
}
calcularNumeroFibonacci(digito);

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

let n = Math.ceil(Math.random()*100); //queremos mostrar el digito random "n" de la sucesion de Fibonacci

nuevo_numero = 0;
numeroFibonacci = [0, 1];
digito = numeroFibonacci.length;

function calcularNumeroDadoFibonacci(digito){
  if (digito <= n) { 
    nuevo_numero = numeroFibonacci[digito-1] + numeroFibonacci[digito-2];
    numeroFibonacci.push(nuevo_numero);
    digito = digito + 1;
    calcularNumeroDadoFibonacci(digito); 
  }  
  return nuevo_numero;
}

console.log(`\nDesafío 15: calcular el número random ${n} de la sucesión de Fibonacci: ${calcularNumeroDadoFibonacci(digito)}`);

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/

let numeroIngresado = Math.ceil(Math.random()*1000); //generamos un número random de 1 a 1000

function reconocerNumeroPrimo(numeroIngresado){
  for (i=2; i<numeroIngresado ; i++){
    if ((numeroIngresado % i) === 0){
      return false;    
   }
   return true;
  }
}
console.log("\nDesafío 16: el número aleatorio " + numeroIngresado + " es primo: " + reconocerNumeroPrimo(numeroIngresado));

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

let numero = 123456789;
numero = numero.toString();
let numeroEnLetras = numero.split("");
let sumaDeNumeros = 0;
numeroEnLetras.forEach(function(elementos)
  {sumaDeNumeros = sumaDeNumeros + Number(elementos);});

console.log("\nDesafío 17: la suma de los dígitos de " + numero + " es: " + sumaDeNumeros);

/*
Desafío de programación #18: Imprimir los primeros 100 números primos
*/

let cantidadNumerosPrimos = 0;
let totalNumeroPrimos = 100;
let matrizPrimos = [];
let indice = 3;
let senial = 0;

while (cantidadNumerosPrimos < totalNumeroPrimos){
  for (i = 2; i < indice; i++){
    if (indice % i === 0){
      //dividio con resto 0: no es primo
      senial = 1;
      break;
    }
  }
  if (senial == 0){
    //es primo
    matrizPrimos.push(indice);
    cantidadNumerosPrimos++;
  }
  senial = 0;
  indice = indice +1;
}
console.log("\nDesafío 18: lista de los primeros 100 números primos:");
console.log(matrizPrimos);

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/
let alComienzo = 10;
let n_primos = 10;

cantidadNumerosPrimos = 0;
totalNumeroPrimos = n_primos;
matrizPrimos = [];
indice = alComienzo + 1 ;
senial = 0;

while (cantidadNumerosPrimos < totalNumeroPrimos){
  for (i = 2; i < indice; i++){
    if (indice % i === 0){
      //dividio con resto 0: no es primo
      senial = 1;
      break;
    }
  }
  if (senial == 0){
    //es primo
    matrizPrimos.push(indice);
    cantidadNumerosPrimos++;
  }
  senial = 0;
  indice = indice +1;
}
console.log("\nDesafío 19: lista de los primeros " + totalNumeroPrimos + " números primos a partir de " + alComienzo);
console.log(matrizPrimos);

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/
 
let matrizALaIzquierda = [9, 1, 2, 3, 4];
console.log("\nDesafío 20: mover a la izquierda los elementos del array: " + matrizALaIzquierda);
let elementoAMover = matrizALaIzquierda.shift();
matrizALaIzquierda.push(elementoAMover); 
console.log("Los elementos ya movidos: " + matrizALaIzquierda);
  
/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/

let matrizALaDerecha = [2, 3, 4, 1];
console.log("\nDesafío 21: mover a la derecha los elementos del array: " + matrizALaDerecha);
elementoAMover = matrizALaDerecha.pop();
matrizALaDerecha.unshift(elementoAMover);
console.log("Los elementos ya movidos: " + matrizALaDerecha);

/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/

let arrayAInvertir = [1, 2, 3, 4, 5, 6];
console.log("\nDesafío 22: Invertir los valores de este array: " + arrayAInvertir);
arrayAInvertir.reverse();
console.log("Los valores ya invertidos: " + arrayAInvertir);

/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

let cadenaARevertir = "dabale arroz a la zorra el abad";
console.log("\nDesafío 23: invertir esta cadena de caracteres: " + cadenaARevertir);
arrayAInvertir = Array.from(cadenaARevertir);
let cadenaInversa = "";
for (i=arrayAInvertir.length - 1; i >= 0; i--){
  cadenaInversa = cadenaInversa + arrayAInvertir[i];
}
console.log("El string ya invertido: " + cadenaInversa);

/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

const primerArray = [1,2,3];
const segundoArray = ["a","b","c"];
let arrayConcatenado = [];

function concatenarArrays(primerArray, segundoArray){
  return arrayConcatenado = primerArray.concat(segundoArray);
}

console.log(`\nDesafío 24: Crear una funcion que concatene el array: ${primerArray} y el array: ${segundoArray}
en un único array: ${concatenarArrays(primerArray, segundoArray)}`)

/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números 
como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
*/
//es un método picapiedra pero funciona

const array1 = [1, 2, 4];
const array2 = [3,2,11,1];
let arrayRepetidos = [];
let arrayDistintos = [];

arrayRepetidos = array1.concat(array2);
for (i=0; i < arrayRepetidos.length; i++ ){
  for (a= i+1 ; a < arrayRepetidos.length; a++){
    if (arrayRepetidos[i] === arrayRepetidos[a] && arrayRepetidos[i] != ""){
      arrayRepetidos[i] = "";
      arrayRepetidos[a] = "";
    }
   }
  }
for (i=0; i < arrayRepetidos.length; i++){
  if (arrayRepetidos[i]  != ""){
    arrayDistintos.push(arrayRepetidos[i]);
  }

}
console.log("\nDesafío 25: Tomando el primer y el segundo array, formar un array con los elementos que no esten presentes en ambos:");
console.log(array1);
console.log(array2);
console.log(arrayDistintos);

/*
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne
 un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

let array3 = [5,1,2,3,4];
let array4 = [3,4];
let arrayEnElPrimeroPeroNoEnElSegundo = [];
senial = 0;

function restaDeConjuntos(array3, array4){
  for (i=0; i<array3.length; i++){
   senial = 0;
   for (a=0; a <array4.length; a++){
     if (array3[i] === array4[a]){
       //se repite
       senial = 1;
     }
    }
  if (senial==0){
   arrayEnElPrimeroPeroNoEnElSegundo.push(array3[i]);
  }
  }
  return arrayEnElPrimeroPeroNoEnElSegundo;
}
console.log("\nDesafío 26: Mostrar los elementos que se encuentren en el primer array " + array3 +
          "\npero no en el segundo array: " + array4 +
          "\nArray final: " + restaDeConjuntos(array3, array4));

/*
Desafío de programación #27: Crear una función que reciba un array de números como argumento 
y retorne un array con los elementos distintos //léase NO devolver los elementos repetidos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/

const arrayAFiltrar = [1,2,3,4,5,4,3,2,1,0];
let arrayFiltrado = arrayAFiltrar.slice(0);

function filtrarArray(arrayFiltrado){
  for (i = 0; i < arrayFiltrado.length; i++){
    for (a=i+1; a < arrayFiltrado.length; a++){
     if (arrayFiltrado[i] === arrayFiltrado[a]){
       //está repetido
       arrayFiltrado.splice(a, 1);
      }
    }
  }
  return arrayFiltrado;
}
console.log(`\nDesafío 27: dado un array ${arrayAFiltrar}, retornar un array con los elementos que 
no se repiten: ${filtrarArray(arrayFiltrado)}`);


/*
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
