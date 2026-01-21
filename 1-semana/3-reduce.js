//🧠 EJERCICIO 1 – reduce básico (sumar capítulos)

// <- esto es una lista de objetos en JS
const capitulos = [
  { titulo: "Madrid", contenido: "..." },
  { titulo: "Día triste", contenido: "..." },
  { titulo: "Dudas existenciales", contenido: "..." }
];

//Situación real
// Quieres saber cuántos capítulos hay en total dentro de un diario.
// Usa reduce
// Devuelve el número total de capítulos
// Muestra el resultado en consola

//solución simple idk
const cantidadCapitulos = capitulos.length;
console.log("la cantidad total de capitulos es: ",cantidadCapitulos);


// ✏️comentario: aquí no entendí cómo usar reduce para contar cada capitulo (cada objeto)
// sin tener un número que sumar 
const totalCapitulos = capitulos.reduce((acumulador, capitulo) => {
    return acumulador + capitulo.titulo
}, 0);
console.log(totalCapitulos);

//✏️comentario: reduce es la base de qué o reemplaza el uso de qué en JS 
// supongo que reemplaza el uso del bucle for, pero no sé con qué se está combinando para mejorarlo

//🧠 EJERCICIO 2 – reduce para sumar datos 

const capitulos2 = [
  { titulo: "Madrid", palabras: 350 },
  { titulo: "Día triste", palabras: 120 },
  { titulo: "Dudas existenciales", palabras: 500 }
];

// Cada capítulo tiene una cantidad de palabras y quieres saber:
// 👉 cuántas palabras has escrito en total
// Usa reduce
// Devuelve el total de palabras escritas


const totalPalabras = capitulos2.reduce((acumulador, palabra) => {
    return acumulador + palabra.palabras
}, 0);
// aquí uso backticks o tildes invertidas
// para usar PLANTILLAS LITERALES que me permiten 
//escribir variables dentro de cadenas 
console.log(`Has escrito un total de ${totalPalabras} palabras`);


//🧠 EJERCICIO 3 – reduce para agrupar información

const capitulos3 = [
  { titulo: "Madrid", emocion: "feliz" },
  { titulo: "Día triste", emocion: "triste" },
  { titulo: "Cansancio", emocion: "triste" },
  { titulo: "Logro personal", emocion: "feliz" }
];

//Situación real
// Cada capítulo tiene una emoción principal.
// Devuelve un objeto con el conteo de cada emocion


//✏️comentario: aquí le puse de nombre al valor inicial "valorEmocion"
//para diferenciarlo de la propiedad emocion

const conteoEmociones = capitulos3.reduce((acumulador, valorEmocion) => {
  // Si "existe" ya existe en el acumulador, incrementa en 1 su contador
  if (acumulador[valorEmocion.emocion]) {
    acumulador[valorEmocion.emocion]++;
  } else {
    // si no existe "existe", crea la propiedad y le pone 1
    acumulador[valorEmocion.emocion] = 1;
  }
  //REPASITO: reduce
  //Finaliza la ejecución de una función 
  // y devuelve un valor específico al lugar donde fue llamada.
    return acumulador; //retorna el acumulador para la siguiente iteración
}, {}); // {} es el valor inicial en reduce: un objeto vacío

console.log(conteoEmociones);

//✏️comentario:
//cómo podría hacer este código más eficiente y mostrar el resultado más legible?

//🧠 EJERCICIO 4 – reduce para generar un índice

const capitulos4 = [
  { titulo: "Madrid" },
  { titulo: "Día triste" },
  { titulo: "Dudas existenciales" }
];

// Situación real
// Quieres generar automáticamente el índice del diario.

//usamos index para que use cada indice del arrray (ejemplo: "madrid" = indice 0)
const indiceCapitulos = capitulos4.reduce((acum,tituloCap, index) => {
  //usamos el metodo push para agregar al final en cada iteracion
  // index+1 = tomará el número de indice (ej: 0) y le suma 1
  // concatenamos con el punto y cada capitulo del objeto capitulos4
  acum.push( index+1 + ". " + tituloCap.titulo);
  //finalizamos la ejecución devolviendo el array con los capitulos
  return acum;
}, []); //iniciamos con un array vacio

//CÓMO FUNCIONA:
// Iteración 0: acum = [] → añade "1. Madrid" → ["1. Madrid"]
// Iteración 1: acum = ["1. Madrid"] → añade "2. Día triste" → ["1. Madrid", "2. Día triste"]....

console.log(indiceCapitulos);

//con una solución antigua estaba creando un objeto, ahora 
// estoy creando una nueva array y le agrego en cada iteración el capitulo
// const indiceCapitulos = capitulos4.reduce((acum,tituloCap, index) => {
//   acum.push({
//     num: index + 1,
//     ...tituloCap
//   });
//   return acum;
// }, []);
// console.log(indiceCapitulos);

//✏️comentario:
//no entiendo bien cómo funciona la sintaxis de reduce, 
// no entiendo qué es el acumulador y qué valores puede tener o cómo se puede modificar

//🧠 PENSAMIENTO CRÍTICO (obligatorio)

// ¿Por qué reduce es más flexible que map y filter?
// porque permite la inmutabiliadad (dejar el array original sin cambios)
// y se pueden usar condiciones, metodos,creando nuevos arrays con condciones (como filter)
// o trasnformando todo como map
// ¿En qué casos no usarías reduce?
// en casos en donde tenga que modificar varias veces un array para conseguir un resultado 
// es decir, no lo pueda hacer con un solo acumulador
// y en donde necesite soluciones más simples (en donde puedo usar map, filter o algun otro metodo)
// ¿Qué ventaja tiene frente a un for clásico?
// que puedes iterar y al mismo tiempo transformar valores, o hacer funciones más complejas
// ademas de lo que sería un ciclo for
// ¿Este cálculo debería hacerse en frontend o backend? ¿por qué?
// pienso que en backend, porque son cambios de lógica y en base a datos existentes
// y también se podría usar para frontend para mostrar datos del backend de manera organizada


// 🧠 COMENTARIO FINAL (hábito clave)
// Hoy entendí que reduce sirve para: contar elementos, frecuencias de un elemento o para agrupar elementos
// Lo que más me costó fue: entender cómo usar la sintaxis de reduce y aplicar otros metodos al usar reduce
// Mañana debo aprender: mobile first 