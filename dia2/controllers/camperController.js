const CamperModel = require('../models/camperModel');

const CamperController = {
  async getAll(req, res) {
    try {
      const campers = await CamperModel.getAll();
      res.json(campers);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener campers' });
    }
  },

  async getById(req, res) {
    try {
      const camper = await CamperModel.getById(req.params.id);
      if (!camper) return res.status(404).json({ error: 'Camper no encontrado' });
      res.json(camper);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener camper' });
    }
  },

  async create(req, res) {
    try {
      const result = await CamperModel.create(req.body);
      res.status(201).json({ msg: 'Camper creado', id: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear camper' });
    }
  },

  async update(req, res) {
    try {
      const result = await CamperModel.update(req.params.id, req.body);
      if (result.matchedCount === 0) return res.status(404).json({ error: 'Camper no encontrado' });
      res.json({ msg: 'Camper actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar camper' });
    }
  },

  async delete(req, res) {
    try {
      const result = await CamperModel.delete(req.params.id);
      if (result.deletedCount === 0) return res.status(404).json({ error: 'Camper no encontrado' });
      res.json({ msg: 'Camper eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar camper' });
    }
  }
};

module.exports = CamperController;
