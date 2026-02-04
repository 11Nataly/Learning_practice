
// 🧠 EJERCICIO 1 – Objetos como modelo mental (base de React)
// Un diario es un OBJETO
const diario = {
  id: 1,
  titulo: "Diario de Gratitud",
  fechaCreacion: "2025-01-01",
  capitulos: 12,
  privado: true
};

// Situación real

// Necesitas mostrar información del diario en distintas partes de la app:
// título
//utilizo la notación de corchetes dado que el objeto
// puede tener caracteres especiales o la clave tiene una variable
console.log("titulo: "+diario['titulo']);

// número de capítulos
// uso la notación de punto, pero no sé si otra este mejor
console.log("cantidad de captiulos: "+diario.capitulos);

// si es privado o no

//uso una condición simple para que el usuario pueda entender 
// si es privado o público
if (diario.privado == true) {
  console.log("privacidad: "+ "privado");
} else {
  console.log("privacidad: "+ "público");
} 

// 👉 Sin destructuring, accede a esos valores y muéstralos en consola.

// ✏️ Comentario (obligatorio):
// ¿Qué se vuelve repetitivo?
//el usar las notaciones para tomar las elementos de los objetos 
// y escribir muchos logs diferentes
// ¿Qué parte se siente “torpe”?
// // si cambia el nombre de la clave del objeto, o del objeto
// 💡 Exacto.
// Ese es el problema que destructuring viene a resolver.
//podría ser complicado volver a modificar el código para que muestre los resultados


//🧠 EJERCICIO 2 – Destructuring (leer datos como React)
const { titulo, capitulos, privado } = diario;

console.log(titulo);
console.log(capitulos);
console.log(privado);

//lo que entiendo de cómo funciona:

//aquí lo que entiendo que  hizo fue usar el concepto destructuring
// para desempacar los datos que necesitamos y asignarlos a la variable diario

// // ✔️CORRECCIÓN
// No los asignas a diario.Creas variables nuevas a partir de diario

// lo que hace que no se tenga que reescribir el nombre del objeto una y otra vez
// y si el nombre del objeto cambia, es más fácil cambiar la lógica de la variable
// o agregar o quitar valores que necesitemso mostrar

// Pensamiento guiado
// ¿Qué cambia respecto a diario.titulo?
//como los valores de las propiedades están guardados en una variable
// es más fácil llamarlos y usarlos
// ¿Por qué esto es más legible?
//por lo que dije arriba, hace más fácil llamar los datos,
// mantiene los dato que queremos ordenados y los console logs también para entender la lógica
// por si otro dev o tu mismo tienen que ver el código
// ✏️ Comentario:

// “Destructuring me sirve para desempacar o extraer datos de un objeto
// y utlizarlos en otras variables  y llamar sólo los especificos que necesito”

//🧠 EJERCICIO 3 – Objetos dentro de arrays (real life)
const libros = [
  { id: 1, titulo: "Gratitud", capitulos: 12 },
  { id: 2, titulo: "Viajes", capitulos: 8 },
  { id: 3, titulo: "2026", capitulos: 3 }
];



// Situación real

// Quieres mostrar una lista de libros con:
// título
// número de capítulos
// 👉 Usa map con destructuring dentro del callback.

//tuve que buscar cómo puedo desestructurar en js en callbacks
// lo que hacemos es crear una variable para guardar lo que mapeemos con el metodo
// recibimos el objeto "libros" y extraemos titulo y capitulos  
// como parametros esto se puede hacer porque son propiedades de un objeto (espero eso este bien)
// y en cada iteración el map extrae del objeto los valores de titulo y capitulos
//ESO ES LO QUE ENTENDÍ QUE HICE JFLAJFS}


//✏️comentario: aquí no veo la desestructuración implicita, es como que simplemente
// cuando el array acomoda los elementos y los transforma ya está haciendo desestructuración?
//(sin necesidad de hacerlo como en el ejemplo 2)
const librosYCapitulos = libros.map(({titulo, capitulos}) => {
  console.log("titulo:", titulo , "# capitulos: ", capitulos)
})


// ✔️CORRECCIÓN
// ESTO SÍ ES DESTRUCTURING PORQUE LO QUE ESTÁ HACIENDO AL EXTRAER ({titulo, capitulos})
// es:
// (libro) => {
//   const { titulo, capitulos } = libro;
// }


//ejemplo 2 (mi idea de una desestructuración implicita)
//también es destructuring
libros.map(function(libro) {
  // Desestructuración guardando en la variable del parametro:
  const { titulo, capitulos } = libro;
  console.log("ej2: titulo:", titulo, "# capitulos: ", capitulos)
});

// 💡 Diferencia:

// Primero: destructuring en la firma
// Segundo: destructuring dentro del cuerpo
// Ambos son válidos.
// En React se usa más el primero por legibilidad.
// 📌 No es implícito, es explícito pero compacto.


// 🧠 EJERCICIO 4 – Destructuring en funciones (CLAVE PARA REACT)
//sin destructuring
function mostrarLibro(libro) {
  console.log(libro.titulo);
}
//con destructuring
function mostrarLibro({ titulo }) {
  console.log(titulo);
}



// En React, las props son objetos.

// ✏️ Pensamiento:
// ¿Por qué esto evita errores?
// son menos cosas que llamar, si no usamos destructuring
// entonces tendriamos que hacer la forma tediosa de "libro.capitulos" y 
// así con lo que queramos traer
// lo que deja espacio a errores en escritura de código
// y crea código más confuso y dificil de mantener
// ¿Qué pasa si el objeto crece?
// se puede seguir usando la función, porque va a iterar con el map
// y con la desestructuración nos va a seguir mostrando lo que queremos
// cada libro nuevo con su número de caps

// 🧠 EJERCICIO 5 – Lógica real con objetos (nivel junior real)
const capitulo = {
  titulo: "Madrid",
  fecha: "2025-01-10",
  emocion: "feliz",
  palabras: 350
};
// Si el capítulo tiene más de 300 palabras:
// 👉 mostrar “Capítulo largo”
// Si no:
// 👉 “Capítulo corto”

if (capitulo.palabras >300) {
  console.log("Capítulo largo");
} else {
  console.log("Capítulo corto");
} 
//quise intentar devovler todo el objeto sólo modificando capitulo largo por corto

const capituloNumero = [
  {
  titulo: "Madrid",
  fecha: "2025-01-10",
  emocion: "feliz",
  palabras: 350
},
{
  titulo: "Holi",
  fecha: "2025-01-10",
  emocion: "feliz",
  palabras: 20
}
];

const capitulosCortosLargos = capituloNumero.map(({titulo, palabras}) => {
  if (palabras >300) {
    //❌ No es buena práctica, porque:
// pierdes el valor original
// cambias el tipo (number → string)
    palabras = "Capítulo largo";
} else {
  palabras = "Capítulo corto";
} 
  console.log("titulo:", titulo , "# capitulos: ", palabras)
})

// CORRECIÓN react friendly
const resultado = capituloNumero.map(cap => ({
  ...cap,
  tipo: cap.palabras > 300 ? "Capítulo largo" : "Capítulo corto"
}));

console.log(resultado);


// ✏️ Comentario:
// ¿Dónde pondrías esta lógica: frontend o backend? ¿Por qué?
// la pondría en frontend porque es una forma de tomar los datos que da el backend
// y transformarlos para que el usuario los vea de una forma diferente 
// incluso, más cómoda
 


// 🧠 PENSAMIENTO CRÍTICO (obligatorio)

// Responde con calma, no perfecto:
// ¿Por qué React usa TANTOS objetos?
// No conozco mucho react, pero pienso que es para recibir los datos que da el backend
// 👉 Porque:

// el estado es un objeto

// las props son objetos

// los eventos son objetos

// los datos del backend llegan como objetos

// y mantener cómo se muestran de forma más fácil.
// con menos líneas de código, más entendibles y por lo que los datos que vienen del backend son objetos
// ¿Qué problema resuelve el destructuring?
// ayuda a que traer datos de un objeto sea más fácil sin estar llamando al objeto cada vez que se requiere un dato
// ¿Qué error común evitarías ahora al usar props?
// Quisiera saber los errores comunes. Supongo que escribir bien el nombre de las propiedades
// Mutar props directamente ❌

// Asumir que una prop siempre existe ❌

// No desestructurar y hacer código verboso ❌

// Confundir props con state ❌

// de los objetos y de sus props
// ¿Qué parte de esto ya estabas usando sin saberlo?
// supongo que el destructuring en map, que no se ve como guardar los datos que queremos en una variable const
// pero aún así estamos transformando arrays obteniendo sólo los datos que queremos

// 🧠 COMENTARIO FINAL (hábito clave)
// Hoy entendí que los objetos sirven para: sirven para guardar varios datos dentro de un array?
// Lo que más me confundió fue: cómo usar map con destructuring (asociar conceptos que ya había aprendido con nuevos)
// Esto me ayudará en React porque: No sé nada de react, pero según lo que dijimos entendiendo cómo mapear objetos y usar props.
