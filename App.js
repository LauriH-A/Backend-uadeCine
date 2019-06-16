// Import express
var express = require('express')
//Import Body Parser
var bodyParser = require('body-parser');
var cors = require('cors');
// Initialize the server express// instanciar servidor web
var app = express();

//conectar BD
//var urlBD = 'mongodb://localhost/test';
//var urlBD = "mongodb+srv://test:test1234@cluster0-apezn.mongodb.net/test?retryWrites=true";
//var urlBD = "mongodb+srv://test:test1234@app-mr-8jtkd.mongodb.net/test?retryWrites=true&w=majority";
var urlBD = "mongodb+srv://test:test1234@app-mr-8jtkd.mongodb.net/Prueba?retryWrites=true&w=majority";
//opciones conexion
var opts = {useNewUrlParser : true, connectTimeoutMS:20000};
//importo driver
var mongoose = require('mongoose');
//Pruebo conexion
mongoose.connect(urlBD,opts).then
(
    () => {
            console.log("Conectado!!");
          }, //se conecto
    err => { 
            console.log("ERROR:" + err); 
           } //manejo error
);

// Import router
var apiRoutes = require("./api-routes")


// Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express in Aplicaciones Interactivas'));

// Use Api routes in the App
app.use('/peliculas', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

