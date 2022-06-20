const {
    insertIdentitas,
    getIdentitas,
    getIdentitasId,
    updateIdentitas,
    deleteIdentitas
} = require('../models/M_identitas');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO identitas_sekolah SET ?';

    // masukkan ke dalam model
    insertIdentitas(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identitas_sekolah';

  // import to model
  getIdentitas(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identitas_sekolah WHERE id = ?';

  // import to model
  getIdentitasId(res, querySql,  req.params.id,);
}


// update Identitas
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM identitas_sekolah WHERE id = ?';
    const queryUpdate = 'UPDATE identitas_sekolah SET ? WHERE id = ?';

    // import to model
    updateIdentitas(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Identitas
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM identitas_sekolah WHERE id = ?';
    const queryDelete = 'DELETE FROM identitas_sekolah WHERE id = ?';

    // import to model
    deleteIdentitas(res, querySearch, queryDelete, req.params.id);
};
