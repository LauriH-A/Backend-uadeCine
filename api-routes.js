// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crated with love!',
    });
});

//EndPoint para leer toda la base
router.get('/leerAgenda',function(req,res)
{
    console.log("leer");
    apiController.getContactos(req,res);
});
//EndPoint para leer con filtro
router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});

//+++++++++++++++++comentarios++++++++++++++++
//leer todos los comentarios
router.get('/leerAgenda',function(req,res)
{
    console.log("leer Comentarios en Gral");
    apiController.getComentarios(req,res);
});
//leer comentario por id.
router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getComentariosByIdUasurio(req,res);
});

//insertar comentario
router.post('/insertComentario/Comentario',function(req,res)
{
    console.log(req.body);
    apiController.insertComentario(req,res);
});
//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Comentario',function(req,res)
{
    apiController.deleteComentario(req,res);
});

// Export API routes
module.exports = router;