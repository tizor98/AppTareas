const FS = require("fs");

let tareas = {
   archivo: "tareas.json",
   leer: function() {
      return JSON.parse(FS.readFileSync(this.archivo));
   },
   escribirJSON: function(tasks) {
      const text = JSON.stringify(tasks, null, 3);
      FS.writeFileSync(this.archivo,text);
   },
   guardarTarea: function(tasks) {
      let matrixTareas = this.leer();
      matrixTareas.push({titulo: tasks, estado: "pendiente"});
      this.escribirJSON(matrixTareas);
   },
   filtrarPorEstado: function(estado) {
      let text = this.leer();
      return text.filter( e => e.estado == estado);
   },
   borrarTarea: function(tasks) {
      let matrixTareas = this.leer();
      let answer = matrixTareas.filter( e => e.titulo != tasks)
      this.escribirJSON(answer);
   }
}

module.exports = tareas;