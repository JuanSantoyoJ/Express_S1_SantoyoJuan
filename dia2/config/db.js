const { MongoClient } = require('mongodb');

let client;
let db;

async function connectDB() {
  if (db) return db; // evitar múltiples conexiones

  try {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('✅ Conectado a MongoDB');
    return db;
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error);
    process.exit(1);
  }
}

function getDB() {
  if (!db) {
    throw new Error('No hay conexión con la base de datos');
  }
  return db;
}

module.exports = { connectDB, getDB };
