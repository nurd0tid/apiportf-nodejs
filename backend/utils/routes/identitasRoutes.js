const {
    readDataId,
    updateData,
} = require('../controllers/Identitas');
const express = require('express');
const router = express.Router();

router.route('/:id')
    .get(readDataId)
    .put(updateData)

module.exports = router;