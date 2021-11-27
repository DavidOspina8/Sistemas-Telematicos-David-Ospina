//Importe los módulos requeridos
const express = require("express");
const app = express();
const puerto = 5000;
const path = require('path');
const bodyParser = require('body-parser');

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.use(express.static(__dirname + "/public"))

//Atención de la solicitud
app.get('/', (req,res)=>{
    res.render("index")
    //res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/p1', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1637901746/Taller2/Laptop_fgokxu.jpg",  
                            equipo: "Equipo: Laptop",
                            serial: "Serial: ERD456978D",
                            marca:  "Marca: Hewlett Packard",
                            color:  "Color: Negro"})
});

app.get('/p2', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1637901746/Taller2/Impresora_orbrza.jpg",
                            equipo: "Equipo: Impresora",
                            serial: "Serial: IGMR951357PL",
                            marca:  "Marca: Epson",
                            color:  "Color: Negro Mate"})
});

app.get('/p3', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1637901746/Taller2/SSD_wxaggo.jpg",
                            equipo: "Equipo: SSD Portable",
                            serial: "Serial: SD78965TR1",
                            marca:  "Marca: Adata",
                            color:  "Color: Azul"})
});

app.get('/p4', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1637901746/Taller2/Board_k8udcv.jpg",
                            equipo: "Equipo: Main Board",
                            serial: "Serial: MB6547GR45",
                            marca:  "Marca: MSI",
                            color:  "Color: Rojo"})
});

app.get('/p5', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1638025978/Taller2/Fuente_kvmu8x.jpg",
                            equipo: "Equipo: Fuente Alimentación",
                            serial: "Serial: FA645879PM",
                            marca:  "Marca: L-Link",
                            color:  "Color: Negro-Verde"})
});

app.get('/p6', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1638026064/Taller2/TarjetaVideo_dpzjm8.jpg",
                            equipo: "Equipo: Tarjeta de Video",
                            serial: "Serial: TV45GH69KL",
                            marca:  "Marca: AMD",
                            color:  "Color: Negro-Rojo"})
});

app.get('/p7', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1638026660/Taller2/UPS_vadkpt.jpg",
                            equipo: "Equipo: UPS",
                            serial: "Serial: U653P686S",
                            marca:  "Marca: APC",
                            color:  "Color: Negro"})
});

app.get('/p8', (req,res)=>{
    res.render("main", {    image:  "https://res.cloudinary.com/djtaakfyr/image/upload/v1638026807/Taller2/Monitor_duwfs4.jpg",
                            equipo: "Equipo: Monitor Curvo",
                            serial: "Serial: LK519JH45",
                            marca:  "Marca: Samsung",
                            color:  "Color: Gris"})
});

app.get('/ingresar', (req,res)=>{
    res.render("ingresar")
});

//SERVIDOR ESCUCHA
app.listen(puerto, () => {
    console.log("Servidor en puerto " +puerto);
});