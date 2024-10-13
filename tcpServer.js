import net from 'net';

const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
        socket.write('Hola cliente, tus datos fueron recibidos\n');
    });

    socket.on('error', (err) => {
        console.error(`Error en la conexión con el cliente: ${err.message}`);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
});