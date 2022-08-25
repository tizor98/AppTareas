const FS = require("fs");

let readTareas = {
   archivo: "tareas.json",
   leer: function() {
      return JSON.parse(FS.readFileSync(this.archivo, { encoding: "utf-8"}));
   }
}

module.exports = readTareas;