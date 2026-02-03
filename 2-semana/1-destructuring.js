
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
// tiene espacios
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
// si cambia el nombre de la clave del objeto, o del objeto
//podría ser complicado volver a modificar el código para que muestre los resultados


//🧠 EJERCICIO 2 – Destructuring (leer datos como React)
const { titulo, capitulos, privado } = diario;

console.log(titulo);
console.log(capitulos);
console.log(privado);

//lo que entiendo de cómo funciona:

//aquí lo que entiendo que  hizo fue usar el concepto destructuring
// para desempacar los datos que necesitamos y asignarlos a la variable diario
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






