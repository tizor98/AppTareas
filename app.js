const tareas = require("./funcionesDeTareas");
let notes = tareas.leer();

let action = process.argv[2];
const saltoLinea = "\n" + "-----------------------------------";

switch(action) {
   case "listar":
      console.log("Listado de tareas:" + saltoLinea);
      notes.forEach( (item, indice) => {
         console.log((indice+1) + ". " + item.titulo + " - " + item.estado)
      });
      break;
   case undefined:
      console.log("No entiendo qué quieres hacer" +"\n" + "Las acciones disponibles son: listar, crear, filtrar, borrar");
      break;
   case "crear":
      let instruccion = process.argv[3];
      tareas.guardarTarea(instruccion)
      console.log("Tarea agregada exitosamente" + saltoLinea);
      console.log(instruccion + ": pendiente");
      notes = tareas.leer();
      break;
   case "filtrar":
      console.log("La lista de tareas " + process.argv[3] + " es:" + saltoLinea );
      tareas.filtrarPorEstado(process.argv[3]).forEach( e => console.log(e.titulo));
      break;
   case "borrar":
      tareas.borrarTarea(process.argv[3]);
      console.log("Se eliminó exitosamente la tarea " + process.argv[3]);
      notes = tareas.leer();
      break;
   default:
      console.log("Tienes que pasar una acción" + saltoLinea + "\n" +  "Las acciones disponibles son: listar, crear, filtrar, borrar");
   }

// Otra forma em lugar del foreach:
// NOTES.map( (item, indice) => {
//    console.log((indice+1) + ". " + item.titulo + " - " + item.estado)
// });