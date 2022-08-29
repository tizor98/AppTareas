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
      console.log("No entiendo qué quieres hacer" +"\n" + "Las acciones disponibles son: listar, crear, filtrar");
      break;
   case "crear":
      let instruccion = process.argv[3];
      tareas.guardarTarea({titulo: instruccion, estado: "pendiente"})
      console.log("Tarea agregada exitosamente" + saltoLinea);
      console.log(instruccion + ": pendiente");
      notes = tareas.leer();
      break;
   case "filtrar":
      console.log("La lista de tareas " + process.argv[3] + " es:" + saltoLinea );
      tareas.filtrarPorEstado(process.argv[3]).forEach( e => console.log(e.titulo));
      break;
   default:
      console.log("Tienes que pasar una acción" + saltoLinea + "Las acciones disponibles son: listar, crear, filtrar");
   }

// Otra forma em lugar del foreach:
// NOTES.map( (item, indice) => {
//    console.log((indice+1) + ". " + item.titulo + " - " + item.estado)
// });