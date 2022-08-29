const FS = require("fs");

let tareas = {
   archivo: "tareas.json",
   leer: function() {
      return JSON.parse(FS.readFileSync(this.archivo, { encoding: "utf-8"}));
   },
   escribirJSON: function(tasks) {
      const text = JSON.stringify(tasks);
      FS.writeFileSync(this.archivo,text);
   },
   guardarTarea: function(tasks) {
      let matrixTareas = this.leer();
      matrixTareas.push(tasks);
      this.escribirJSON(matrixTareas);
   },
   filtrarPorEstado: function(estado) {
      let text = this.leer();
      return text.filter( e => e.estado == estado);
   }
}

module.exports = tareas;