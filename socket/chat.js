const socket = (io) => {
  //Funcionalidad de socket.io en el servidor
  io.on("connection", (socket) => {
    let nombre;

    socket.on("conectado", (nomb) => {
      nombre = nomb;
      //socket.broadcast.emit manda el mensaje a todos los clientes excepto al que ha enviado el mensaje
      socket.broadcast.emit("messages", {
        nombre: nombre,
        mensaje: `${nombre} ha entrado en la sala del chat`,
      });
    });

    socket.on("mensaje", (nombre, mensaje) => {
      //io.emit manda el mensaje a todos los clientes conectados al chat
      io.emit("messages", { nombre, mensaje });
    });

    socket.on("disconnect", () => {
      io.emit("messages", {
        servidor: "Servidor",
        mensaje: `${nombre} ha abandonado la sala`,
      });
    });
  });
};

module.exports = socket;
