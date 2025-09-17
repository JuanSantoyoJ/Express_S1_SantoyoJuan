const TrainerModel = require('../models/trainerModel');

const TrainerController = {
  async getAll(req, res) {
    try {
      const trainers = await TrainerModel.getAll();
      res.json(trainers);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener trainers' });
    }
  },

  async getById(req, res) {
    try {
      const camper = await TrainerModel.getById(req.params.id);
      if (!camper) return res.status(404).json({ error: 'Trainer no encontrado' });
      res.json(camper);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener camper' });
    }
  },

  async create(req, res) {
    try {
      const result = await TrainerModel.create(req.body);
      res.status(201).json({ msg: 'Trainer creado', id: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: 'Error al crear camper' });
    }
  },

  async update(req, res) {
    try {
      const result = await TrainerModel.update(req.params.id, req.body);
      if (result.matchedCount === 0) return res.status(404).json({ error: 'Trainer no encontrado' });
      res.json({ msg: 'Trainer actualizado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar camper' });
    }
  },

  async delete(req, res) {
    try {
      const result = await TrainerModel.delete(req.params.id);
      if (result.deletedCount === 0) return res.status(404).json({ error: 'Trainer no encontrado' });
      res.json({ msg: 'Trainer eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar camper' });
    }
  }
};

module.exports = TrainerController;
