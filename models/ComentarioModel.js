var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    idUsuario:String, //para luego machearlo con los comentarios que el usuario genere.
    idPelicula :String,
    comentario: String,
    idComentario:String
});

var Comentarios = mongoose.model('Comentarios', comentarioSchema); //nombre que recibirá mi tabla
console.log("se creo modelo");
module.exports = Comentarios;