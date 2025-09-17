const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db'); // tu db.js

dotenv.config();

const app = express();

// Middleware para JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Importar rutas
const campersRoutes = require('./routes/camperRoutes');

// Usar rutas
app.use('/api/campers', campersRoutes);

// Ruta base (opcional, para verificar que corre el server)
app.get('/', (req, res) => {
  res.send('✅ API funcionando...');
});

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
