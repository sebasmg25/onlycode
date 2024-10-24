const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend con Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
