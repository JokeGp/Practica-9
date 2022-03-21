const express = require("express"); // llamamos el modulo express
const app = express(); // injectamos dependencia

app.get("/", (req, res) => {
  //route handler
  res.send(`Hey, break the walls down this si the root route`); // musetra texto al entrar a la pagina
});

app.listen(3000); // el servidor escuchara y respondera peticiones del puerto 3000
app.get(`/uno`, (req, res) => {
  // aqui establecemos que se enviara al entrar en la ruta uno del servidor
  //route handler
  res.send(`Hey, your heartbeat is the only sound here frome route One`);
});

app.get(`/Judas`, (req, res) => {
  //lo mismo solo que al entrar a ruta judas
  res.send(`Hello your time is over this is mi propia ruta`);
});

app.get(`/InMyMind`, (req, res) => {
  // igual solo al entrar a ruta in my mind crea el cacho en html
  res.send(
    `<html> What have I become\n Now that I´ve betray \n soy un route Prueba`
  );
});
