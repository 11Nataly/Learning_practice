
// Leer y acceder a arrays (muy básico)
const nombres = ["Kissy", "Kori", "Kokito", "Kiki"];

// acceder por medio del indice del elemento que quiero traer a la consola
console.log("el primer nombre es: ",nombres[0]);
console.log("el último nombre es: ",nombres[3]);

// mostrar con length (que no es un metodo) la cantidad total de elementos
console.log("la cantidad de elementos es "+ nombres.length);

// seleccionar el nombre con el indice
console.log("Hola mi nombres es ", nombres[2]);


//!!!!!!!!!!!!!!!
//MEJORA IMPORTANTE
//
//no hay que asumir el tamaño de un array, 
// debes pensar en grande y escalable, así el código no se rompe 
console.log(nombres[nombres.length - 1]);

//cuando practiques bases, es para entrenar al cerebro
// luego aprendes y usas métodos para optimizarlo





//======
// Recorrer un array (pensamiento lógico)
// =====/

//forEach en JavaScript es un método
//  de arrays para ejecutar una función una vez por cada elemento

const edades = [18, 25, 14, 32, 40];


//imprimir cada elemento con el metodo forEach
edades.forEach(edad => {
    console.log(edad);
});
//===============================================================================

//usar metodo filter para mostrar edades mayores o iguales a 18.

// filter() en JavaScript se usa para crear un nuevo
//  array con solo los elementos de un array original
// que cumplen una condición específica definida en
// una función de callback, sin modificar el array
// original

//PASOS
//1.reccorre el array original, una vez por cada elemento
// 2. Ejecuta una función de prueba: Pasa cada elemento a una
// función que tú proporcionas (la función de callback).
// 3. Devuelve true o false: La función de callback debe devolver true si el elemento debe
//  incluirse en el nuevo array, o false si debe descartarse.
// 4. Crea un nuevo array: filter() devuelve un array completamente nuevo con
//  todos los elementos que superaron la prueba (donde la función devolvió true).
const mayorIgual18 = edades.filter(function(edad){
    return edad >=18;
});

console.log(mayorIgual18)



//===============================================================================

// Cuenta cuántas personas son mayores de edad.

console.log(mayorIgual18.length)

//===
// EJERCICIO 3 – Mini lógica (nivel junior real)
// //====

const notas = [3, 5, 4, 2, 5];


///Calcula el promedio de las notas.////////////

// La estructura if-else es una instrucción 
// condicional que permite a un programa tomar 
// decisiones, ejecutando un bloque de código si 
// una condición es verdadera (if) y otro bloque si 
// es falsa (else), siendo una herramienta 
// fundamental para controlar el flujo de 
// ejecución.

//contador para acomular la suma
let suma = 0;
//foreach para sumar cada número del array
notas.forEach(nota => {
    suma += nota; // la suma será igual a la suma que se lleva en cada ciclo + el valor de la nota
})
//
const promedio = suma/notas.length

console.log("el promedio de notas es: ", promedio)

//!!!!!

// ✅ Usaste acumulador
// ✅ No usaste reduce (como se pidió)
// ✅ Código claro y legible

// Esto demuestra que entiendes qué está pasando, no solo copias.



//======================================================

//Muestra:
// "Aprobado" si el promedio es ≥ 3
// "Reprobado" si es menor

if (promedio >= 3){
    console.log("Usted fue aprobado con un promedio de ", promedio)
}else {
    console.log("Usted fue reprobado con un promedio de ", promedio)
}

//================
// EJERCICIO 4 – Explicación (obligatorio)
//

//Me gusta mucho este ejercicio para interiorizar la definición de array.
//// ¿Qué es un array y para qué sirve?
// Una array es un conjunto de elementos en js que se guardan en una variable o constante
// pueden ser manipulados mediante sus indices, metodos, estructuras, etc
// y sirven en el mundo real para llamadas a apis, guardar datos sin modificar la estructura original



// //!!!!!!!!!!!!!!!!
// ✏️ Ajuste pequeño (conceptual)
// Un array sí mantiene estructura, lo que cambia son los valores.

//=======
// EJERCICIO 5 – Comentario final (técnica clave)
//=======

// Mañana debo practicar: map/filter que son claves para REACT
