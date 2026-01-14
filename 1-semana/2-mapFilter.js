//🧠 EJERCICIO 1 – map (transformar datos)
const precios = [1000, 2000, 3000, 4000];


//Crea un nuevo array llamado preciosConIva que:
// multiplique cada precio por 1.19
// Muestra el array original y el nuevo en consola.


const preciosConIva = precios.map(precio => precio * 1.19);


console.log("precios sin iva: ", precios, "precios con iva: ",preciosConIva);

//forma más compleja: mostrar el valor antes y después con el valor correspondiente
const nuevosPrecios =precios.map((precio,indice)=> {
    return `Precio sin IVA: ${precio}, Precio con IVA: ${preciosConIva[indice]}`
});

console.log(nuevosPrecios);
//================
// ⚠️ Mejora importante (nivel empresa)

// Estás dependiendo de otro array externo (preciosConIva).
// Eso puede generar bugs si alguien cambia el orden.

//Mejor versión (más segura):
const nuevosPrecioss = precios.map(precio => {
  const precioConIva = precio * 1.19;
  return `Precio sin IVA: ${precio}, Precio con IVA: ${precioConIva}`;
});

//AQUÍ LO QUE HIZO LA IA FUE UNIR LOS DOS MAP QUE HICE, EN UNA SOLO, QUE MAPEA Y TRANSFORMA
//LOS PRECIOS, GUARDA DENTRO DE UNA CONSTANTE CADA PRECIO QUE SE TRANSFORMA
//Y LUEGO RETORNA EL PRECIO QUE MAPEA Y LA CONSTANTE QUE DEVOLVERA CADA PRECIO MODIFICADO

console.log("map optimizado de empresa: ",nuevosPrecioss);


// Responde en un comentario:
// ¿Qué diferencia hay entre map y forEach?

//creo que ambos sirven para transformar los arrays sin modificar el valor original
// SOLO EJECUTA ACCION SIN RETORNAR (Iterar y actuar). : foreach es para cuando no se necesita una nueva array, porque devuelve undefined
// EJECUTA,  CREA NUEVA COLLECION TRANSFORMADA (Transformar y retornar) : map transforma cada elemento y crea un nuevo array con los resultados


//⚠️ Ajuste conceptual pequeño pero importante:

// forEach NO está pensado para transformar, sino para ejecutar efectos (logs, cambios externos).

// map SÍ está pensado para transformar.

// Versión pulida (entrevista):
// “forEach se usa cuando solo quiero ejecutar una acción por cada elemento,
//  mientras que map se usa cuando necesito crear un nuevo array transformado a partir del original.”


//🧠 EJERCICIO 2 – filter (filtrar datos)
const edades = [12, 17, 18, 25, 30, 15];
// Crea un nuevo array con solo los mayores de edad.
// Muestra:
// el array original
// el nuevo array

//MUY BIEN PORQUE ESTOY GUARDANDO EN UNA CONSTANTE EL CALCULO
const mayorEdad = (edad) => edad >= 18;

//Y EN OTRA LA USO PARA FILTRAR
const mayoresEdades = edades.filter(mayorEdad);

console.log("Los mayores de edad son: ", mayoresEdades, " ", "Todas las edades son: ",edades);

//✏️comentario:cómo puedo hacer que este código tenga menos líneas?
const mayoresEdadess = edades.filter(edad => edad >= 18);

//✏️comentario: los nombres de la variable están bien?
//SÍ PERO PUEDE SER mayoresDeEdad


// Explica en un comentario:
// ¿Por qué filter no modifica el array original?

//porque filter es inmutable: “Porque filter crea un nuevo array con los elementos que cumplen la condición
//  y deja el array original intacto,
//  lo que evita efectos secundarios y hace el código más predecible.”



//🧠 EJERCICIO 3 – map + lógica (nivel junior real)

const nombres = ["ana", "luis", "carlos"];

//Convierte todos los nombres a mayúsculas.
// Muestra el resultado en consola.
// BONUS (si te sientes cómoda):
// Agrega "Hola " delante de cada nombre.


const nombresMayus = nombres.map(nombre => nombre.toUpperCase());

nombresMayus.map(nombre => {
    console.log("Hola,",nombre);
});

// ⚠️ Aquí hay un detalle importante.

// 👉 Estás usando map para solo ejecutar un console.log.

// 📌 Mejor práctica:

nombresMayus.forEach(nombre => {
  console.log("Hola,", nombre);
});

// 🧠 Regla mental:
// map → transformar
// forEach → ejecutar acciones


// 🧠 EJERCICIO 4 – Pensamiento crítico (muy importante)

// ¿En qué casos usarías map en una app real?
//Para por ejemplo mostrar el nombre del usuario en una parte de la app, 
//también para modificar los resultados de una API para mostrarlos en la página de forma diferente 
// o para mostrarle al usuario sólo los valores que quiere encontrar

//🧠 EJERCICIO 5 – Comentario final (hábito clave)
// Hoy entendí que map sirve para transformar todos los elementos de un array 
// y crear un nuevo array que se puede usar para otras coasas
// Mañana debo practicar reduce+lógica