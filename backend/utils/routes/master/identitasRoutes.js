const {
    readDataId,
    updateData,
} = require('../../controllers/master/Identitas');
const express = require('express');
const router = express.Router();

router.route('/:id')
    .get(readDataId)
    .put(updateData)

module.exports = router;