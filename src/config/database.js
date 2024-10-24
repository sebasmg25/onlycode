const { Sequelize } = require('sequelize');

// Crear una instancia de Sequelize
const sequelize = new Sequelize('only_code', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Deshabilita el logging de consultas SQL en la consola (opcional)
});

// Probar la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa con la base de datos.');
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
  });

module.exports = sequelize;
