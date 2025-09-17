module.exports = function validateCamper(req, res, next) {
    const { nombre, edad, estado, correo } = req.body;
  
    // Validar campos obligatorios
    if (!nombre || !edad || !estado || !correo) {
      return res.status(400).json({ error: 'Todos los campos (nombre, edad, estado, correo) son obligatorios' });
    }
  
    // Nombre
    if (typeof nombre !== 'string' || nombre.length < 3) {
      return res.status(400).json({ error: 'El nombre debe ser un string con al menos 3 caracteres' });
    }
  
    // Edad
    if (typeof edad !== 'number' || edad < 15) {
      return res.status(400).json({ error: 'La edad debe ser un número mayor o igual a 15' });
    }
  
    // Estado
    const estadosPermitidos = ['activo', 'inactivo'];
    if (!estadosPermitidos.includes(estado.toLowerCase())) {
      return res.status(400).json({ error: 'El estado debe ser "activo" o "inactivo"' });
    }
  
    // Correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return res.status(400).json({ error: 'Correo electrónico inválido' });
    }
  
    next(); // pasa al controlador si todo está bien
  };
  