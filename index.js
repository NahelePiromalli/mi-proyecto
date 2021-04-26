console.log('Hola Mundo');
// importar la libreria express
const express = require('express');
// invocar express() para crea el objeto app (nuestra aplicacion)
const app = express();
// configuracion de la app
const PORT = process.env.PORT || 3000;
// definir una ruta para nuestra app
app.get('/', (req, res) => {
  res.send('Que onda, Todo bien?');
});
// decirle al server que escuche peticiones en el puerto 3000
app.listen(PORT);
