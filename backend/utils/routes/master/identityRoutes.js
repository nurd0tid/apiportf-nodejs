const {
    createData,
    readData,
    readDataId,
    updateData,
    updateDataId,
    deleteData
} = require('../../controllers/master/Identity');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);

router.route('/:id')
    .get(readDataId)
    .put(updateData)
    .patch(updateDataId)
    .delete(deleteData);

module.exports = router;