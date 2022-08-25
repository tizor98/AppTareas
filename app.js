const readTareas = require("./funcionesDeTareas");
const NOTES = readTareas.leer();

let action = process.argv[2];

switch(action) {
   case "listar":
      console.log("Listado de tareas:" + "\n" + "-----------------------------------");
      NOTES.forEach( (item, indice) => {
         console.log((indice+1) + ". " + item.titulo + " - " + item.estado)
      });
      break;
   case undefined:
      console.log("No entiendo qué quieres hacer" +"\n" + "Las acciones disponibles son: Listar");
      break;
   default:
      console.log("Tienes que pasar una acción" +"\n" + "Las acciones disponibles son: Listar");
   }

// Otra forma em lugar del foreach:
// NOTES.map( (item, indice) => {
//    console.log((indice+1) + ". " + item.titulo + " - " + item.estado)
// });