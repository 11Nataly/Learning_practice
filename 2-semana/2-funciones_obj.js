// 🧠 EJERCICIO 1 – Función como “caja de lógica”
const capitulos = [
  { titulo: "Madrid", palabras: 350 },
  { titulo: "Día gris", palabras: 120 },
  { titulo: "Aprendizaje", palabras: 600 }
];



//aquí use return implícito (envolviendo en parentesis el objeto)para devolver el objeto directamente 
//reuse una función que me diste
// map va a darme el objeto (cada cap) con sus propiedades existentes
// (usando spread operator ...) "...cap"
// y va a guardar en la nueva clave "numPalabras" el valor del capitulo dependiendo
// del numero de palabras.
// así traemos todos los datos modificando sólo el que necesitamos sin modificar el original 

const resultado = capitulos.map(cap => ({
    ...cap,
  numPalabras: cap.palabras > 300 ? "Capítulo largo" : "Capítulo corto"
}));

console.log("PRUEBA: ", resultado);

//✏️ Reflexión obligatoria (en comentarios):
// ¿Por qué conviene que la función devuelva algo y no haga console.log?
// porque los resultados log son sólo para testeo, ya que solo aparecen en consola
// se usa return para devolver el resultado cuando se ejecute la función
// ¿En qué se parece esto a una función que prepara datos para una UI?
// Se parece en el sentido que toma los datos que daría un backend para 
// mostrarlos al usuario de la forma que quiere el desarrollador


// 🧠 EJERCICIO 2 – Funciones + map (pensar como frontend)

//no tengo tiempo pero entiendo el concepto

// Reflexión:

// ¿Qué diferencia hay entre transformar datos y mostrarlos?
// transformar datos sirve para mostrarlos de la manera que quieres o en el formato necesario
// transformar datos significa tomarlos y modificarlos en lo que necesitas
// mostrarlos significa mostrarlos en la interfaz del usuario
// ¿Por qué React prefiere lo primero?
// supongo que para hacer el código más sencillo, no sé muy bien

// ✔️CORRECCIÓN EJERCICIO 1 Y 2
// function clasificarCapitulo(capitulo) {
//   return capitulo.palabras > 300 ? "Capítulo largo" : "Capítulo corto";
// }
// const resultado = capitulos.map(cap => ({
//   ...cap,
//   tipo: clasificarCapitulo(cap)
// }));

// 📌 Por qué esto importa

// React vive de funciones pequeñas y reutilizables

// Si mañana la regla cambia (300 → 500), cambias una sola función

// Tu versión funciona, pero está más “pegada” a este caso puntual



//🧠 EJERCICIO 3 – Callback consciente (no automático)
//Situación real

// Solo quieres mostrar capítulos largos.
// 👉 Reto
// Usa filter.
// El callback debe:
// recibir un capítulo
// decidir si se queda o no

//aquí pensaba usar el resultado del map de arriba
//pero creo que eso daría problemas si el map de arriba falla, 
// mejor hacerlo con el objeto original
const capitulosLargos = capitulos.filter(cap =>  cap.palabras > 300 );
console.log("caps largos: ",capitulosLargos);

// es curioso que sin necesidad de crear un objeto en el callback o usar 
// spread operator ..., ya me devuelve todos los que cumplen la condición

// 🎯 Insight importante:
// filter NO transforma
// filter selecciona

// NO copies lógica del map: piensa qué pregunta responde filter.

// ✏️ Reflexión:

// ¿Qué pregunta responde filter?
// ¿cómo mostrar sólo los datos que cumplen una condición? ya que esa es la función de filter
//  // ✔️CORRECCIÓN“¿Este elemento se queda o se va?”
// lo podemos usar para mostrar, en este caso, sólo los capitulos largos
// ¿Por qué el callback devuelve true o false?
// en mi caso no devuelve directamente true or false
// pero como filter es una condición, si se cumple trae los true 
// si no cumple, simplemente no incluye los false


//🧠 EJERCICIO 4 – Función que recibe objetos (props sin React)
//Vas a crear una función que recibe un objeto y lo presenta.

//SE ME HIZO MUY LARGO ASÍ QUE LE DIJE A LA IA QUE CÓMO PODÍA SIMPLIFICARLO
//creando una función que clasifique los caps con la msima lógica del map

// function clasificarCapitulo(palabras) {
//   return palabras > 300 ? "Capítulo largo" : "Capítulo corto";
// }

// function mostrarCapitulo({titulo, palabras}) {
//     const tamañoCap = clasificarCapitulo(palabras);
//     return `${titulo} - ${tamañoCap} `;
// }

//simplificado
const clasificarCapitulos = palabras => palabras > 300 ? "Capítulo largo" : "Capítulo corto";

function mostrarTodosCapitulos(listaCapitulos) {
    return listaCapitulos.map(({ titulo, palabras }) => 
        `${titulo} - ${clasificarCapitulos(palabras)}`
    );
}
console.log("FUNCION QUE RECIBE OBJETOS: ", mostrarTodosCapitulos(capitulos));

// 👉 Reto

// Decide:
// ¿recibes el objeto completo?
// ¿usas destructuring en el parámetro?
// La función debe devolver un string tipo:
// "Madrid — Capítulo largo"



// ✏️ Reflexión:
// ¿Por qué destructuring en el parámetro hace el código más claro?
// es más claro que valores de la entidad se están usando
// ¿Qué pasaría si el objeto crece?
// si el objeto crece la función sigue sirviendo con los valores que estamos usando

// 🧠 EJERCICIO 5 – Separar lógica de presentación (nivel pro-junior)
// Situación real
// Tienes:
// una función que decide 
//lo hice con la función // clasificaCapitulos
// otra que presenta:
// lo hice con la función mostrar...

// ✏️ Reflexión clave:
// ¿Por qué separar lógica de presentación?
// porque si alguna de las dos debe cambiar la lógica de la otra se mantiene
// haciendo código más fácil de mantener y retutilizable
// ¿Dónde pondrías cada cosa en una app real?
// en el backend la que decide
// en el frontend la que muestra

//🧠 PENSAMIENTO CRÍTICO (obligatorio)

// ¿Qué hace realmente un callback?
//CORRECCIÓNuna función que se entrega a otra función para que esta la ejecute
// un callback es una función que se ejecuta y luego ejecuta otra función o méotodo
// haciendo que el código sea asincrono (no se interrumpe la ejecución de otro código mientras el callback se ejecuta)
// ¿Por qué map y filter reciben funciones?
// supongo que es para ejecutar sus procesos
// ¿Qué error común estabas cometiendo antes con map?
// no conozco los errores comunes, pero creo que usaba console.logs dentro
// y así transformaba para crear arrays
// pero los console.logs deben ir a fuera, según lo que entendí
// ¿Qué parte de esto ya habías usado “en automático”?
// supongo que map y filter para transformar datos 





//========================================================

// 🧠 COMENTARIO FINAL (hábito clave)
// Hoy entendí que las funciones sirve para: ejecutar bloques de código, pueden ser reutilizadas y pueden presentar contenido y ejecutar metodos 
// Lo que más me confundió fue: la lógica de decisión y presentación, no sabía cómmo separarlas o hacerlas cortas
// Esto me ayudará en React porque: me ayuda a entender cómo  funcionan los props y tener de base el uso de funciones

