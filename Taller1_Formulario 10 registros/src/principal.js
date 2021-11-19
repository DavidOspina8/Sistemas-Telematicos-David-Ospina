const express = require('express');
const app = express();
const puerto = 4000;
var i=0;
var listaNombre = [];
var listaEdad = [];
var listaGenero = [];
var listaTelefono = [];

const path = require('path');
const bodyParser = require('body-parser');

//TRAE LOS DATOS DEL CSS
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//CARGA LA WEB INICIAL (RAIZ)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/formulario.html'));
});

//CARGA LA WEB INICIAL (RAIZ)
app.get('/tablaprueba', (req, res) => {
    res.sendFile(path.join(__dirname, '/tabla.html'));
});

//ALMACENA INGRESO DE USUARIOS
app.post('/', (req, res) => {
        if ( i < 5 ) {     
        listaNombre[i] = req.body.nombre;
        listaEdad[i] = req.body.edad;
        listaGenero[i] = req.body.genero;
        listaTelefono[i] = req.body.telefono;
        } else {
            res.send('NO SE PUEDEN INGRESAR MAS USUARIOS');          
        }
        i++;
        res.sendFile(path.join(__dirname, '/formulario.html'));
});

//MUESTRA TODOS LOS DATOS REGISTRADOS EN LA TERMINAL
app.get('/tabla-terminal', (req, res) => {
    res.send('DATOS MOSTRADOS EN CONSOLA');
    console.table({Nombre : listaNombre, Edad: listaEdad, Genero: listaGenero, Telefono: listaTelefono});    
});

//MUESTRA SOLO NOMBRE EN WEB
app.get('/nombres-web', (req, res) => {
    res.sendFile(path.join(__dirname, '/tabla.html'));  
    res.write("Listado de Nombres: \n \n")
    for(var k=0;k<listaNombre.length;k++){
        var n2=k+1;
        res.write(n2+" - "+listaNombre[k] +"\n");
    }
    res.end();
});

//MUESTRA NOMBRE-GENERO EN WEB
app.get('/nombre-genero-web', (req,res)=>{
    res.write("Listado de Nombre y Genero: \n \n")
    for(var y=0;y<listaNombre.length;y++){
        var n3=y+1;
        res.write(n3+" - "+listaNombre[y] + "       "+listaGenero[y]+"\n");
    }    
    res.end();    
});

//MUESTRA NOMBRE-TELEFONO EN LA TERMINAL
app.get('/nombre-telefono-terminal', (req, res) => {
    res.send('DATOS MOSTRADOS EN CONSOLA');
    console.table({Nombre : listaNombre, Telefono: listaTelefono}); 
});

app.listen(puerto, () => {
    console.log("Ejecutando Express");
});



