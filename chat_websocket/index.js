//const path = require('path');    //Se usa para las rutas de las carpetas
const express = require('express');  //Modulo para el servidor
const app = express();
const puerto = process.env.PORT;

//Configuracion Puerto del Servidor
app.set('port', puerto);  //Carga el puerto disponible

//Archivos estaticos
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + "/public"));

//Inicia el Servidor
const server = app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});

//Websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('nueva conexion', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    });

    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing', data);
    });
});