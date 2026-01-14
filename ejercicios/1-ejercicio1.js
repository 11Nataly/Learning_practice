// Tienes un arreglo de números.
// Crea una función que devuelva solo los números mayores a 10.

//esto no me sirve porque esta tomando un sólo número, 
// yo necesito que recorra la ARRAY para devolverme el valor
// function mayores1(numero) {
//     if (numero  > 10) {
//         console.log("Sus números mayores que 10 son: ", numero);
//     }
//     else {
//         console.log("no hay ningún número mayor a diez")
//     }
// }

// const entrada = [5, 12, 8, 20, 3];
// const resultado =  mayores1(entrada);

// me devuelve algo que nada que ver
// Sus números mayores que 10 son:  [ false, true, false, true, false ]

// function mayores1(numeros) {
//     //si el número es mayor que 10, se guarda aquí
//    const numerosMayores = numeros.map(numero => numero > 10);
//     if (numerosMayores) {
//        console.log("Sus números mayores que 10 son: ", numerosMayores);

//     }
//     else {
//         console.log("no hay ningún número mayor a diez")
//     }
// }

// const entrada = [5, 12, 8, 20, 3];
// const resultado =  mayores1(entrada);


//ESTA NO ME SERVIA PORQUE MAP SIEMPRE devuelve un arreglo del mismo tamaño que el original.
//además, transforma cada elemento

// const numeros = [5, 12, 8, 20, 3];

// const numerosMayores = numeros.map(function (numero) {
//       if (numero > 10) {
//         return numero;
//     }
// });

// console.log("Sus números mayores que 10 son: ", numerosMayores);



//========SOLUCION CORRECTA======

const numeros = [5, 12, 8, 20, 3];

const numerosMayores = numeros.filter(function (numero) {
      return numero > 10
    });

console.log("Sus números mayores que 10 son: ", numerosMayores);



//=======RESPUESTA  PARA ENTREVISTA ===========
//   “Inicialmente usé map, pero luego entendí que map transforma todos los elementos y siempre devuelve un arreglo del mismo tamaño.
// Como yo necesitaba filtrar valores, la mejor opción era usar filter, que solo devuelve los elementos que cumplen la condición.”

// “Usaría map cuando necesito devolver la misma cantidad de elementos pero transformados, por ejemplo calcular el precio con IVA para cada producto.
// Usaría filter cuando necesito obtener solo los elementos que cumplen una condición específica.”

