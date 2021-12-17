//Importe los modulos requeridos
const express = require("express");
const app = express();
const puerto = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded({extended: false}));

//CARGA LA WEB INICIAL (RAIZ)
app.get('/', (req, res) => {
    res.render("index")
});

//SERVIDOR ESCUCHA
app.listen(puerto, () => {
    console.log("Servidor en puerto " +puerto);
});