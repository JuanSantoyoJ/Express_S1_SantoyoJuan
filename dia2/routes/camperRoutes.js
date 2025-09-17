const express = require('express');
const CamperController = require('../controllers/camperController');
const validateCamper = require('../middlewares/validateCamper');

const router = express.Router();

// CRUD con validaciones en create y update
router.get('/', CamperController.getAll);
router.get('/:id', CamperController.getById);
router.post('/', validateCamper, CamperController.create);
router.put('/:id', validateCamper, CamperController.update);
router.delete('/:id', CamperController.delete);

module.exports = router;
