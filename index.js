//Servidor con express
var express = require("express");
var app = express();
const path = require("path");
const http = require("http").Server(app);
const cors = require("cors");

//Inicializamos socketio
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

require("./socket/chat")(io);

app.use(
  cors({
    origen: "*",
    credentials: true,
    expuestosHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    methods: ["OPTIONS", "GET", "PUT", "POST", "DELETE"],
  })
);

//Static files
app.use(express.static(path.join(__dirname, "public")));
//Static file declaration
app.use(express.static(path.join(__dirname, "build/")));
//build mode
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname + "build/index.html"));
});

app.get("/api", (req, res) => res.send("Home Page Chat"));

http.listen(process.env.PORT || 8080, () =>
  console.log("Servidor inicializado")
);
