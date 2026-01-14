//===CONCEPTOS=///
// PROMESAAAAAAAA 
// “Una promesa es un objeto que representa un valor que estará disponible ahora, en el futuro o nunca.
// Se usa para manejar operaciones que toman tiempo, como peticiones a un servidor.”

// “Es como pedir un café.
//  No sabes cuándo estará listo,
//   pero sabes que te lo van a entregar
//    o te van a decir que hubo un problema.”



//===Estados de una promesa

// pending → esperando

// fulfilled → resuelta

// rejected → error




//====ASYNC/AWAIT

// “async/await es una forma más clara de trabajar con promesas.
// Permite escribir código asíncrono que se lee como si fuera sincrónico, sin bloquear la ejecución.”


// “Tenemos una función asíncrona que devuelve datos después de un tiempo.
// ¿Cómo la consumirías usando async/await?”
function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Ana", "Luis", "Carlos"]);
    }, 2000);
  });
}

//lo que quieren que haga es que en lugar de que sea asincrona 
//y se demore el envio de datos, 
//async/await NO vuelve el código sincrónico, solo hace que se lea como sincrónico.
//El código sigue siendo asíncrono, solo que más legible.




async function procesarDatos() {
    const datos = await obtenerDatos();
    //“await pausa la ejecución de la función, no del programa completo.”
    console.log("Procesan do: ", datos);
}

procesarDatos();
console.log("Este mensaje aparece ANTES que la respuesta, porque procesarDatos devuelve una promesa.");







//===explicar código en la entrevista


// “La función obtenerDatos devuelve una promesa que se resuelve después de dos segundos.
// procesarDatos es una función async, por lo que puede usar await para esperar el resultado.
// Mientras tanto, el resto del programa sigue ejecutándose sin bloquearse.”



// Usas promesas / async cuando:

// Llamas a APIs (fetch)

// Lees archivos

// Esperas datos del backend

// Trabajas con temporizadores

// NO es necesario cuando:

// Operaciones simples

// Cálculos inmediatos

