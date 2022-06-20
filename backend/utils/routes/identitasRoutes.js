const {
    createData,
    readData,
    readDataId,
    updateData,
    deleteData
} = require('../controllers/Identitas');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .get(readDataId)
    .put(updateData)
    .delete(deleteData);

module.exports = router;