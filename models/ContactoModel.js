var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactoSchema = new Schema({
    dni:String, //para luego machearlo con los comentarios que el usuario genere.
    nombre:String,
    apellido: String,
    mail: String
});

var Contactos = mongoose.model('Usuarios', contactoSchema); //nombre que recibirá mi tabla
console.log("se creo modelo de Usuarios");
module.exports = Contactos;