const {
    insertPtk,
    getPtk,
    getPtkId,
    updatePtk,
    deletePtk
} = require('../../models/master/M_ptk');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO jenis_ptk SET ?';

    // masukkan ke dalam model
    insertPtk(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM jenis_ptk';

  // import to model
  getPtk(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM jenis_ptk WHERE id_ptk = ?';

  // import to model
  getPtkId(res, querySql,  req.params.id,);
}


// update Ptk
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM jenis_ptk WHERE id_ptk = ?';
    const queryUpdate = 'UPDATE jenis_ptk SET ? WHERE id_ptk = ?';

    // import to model
    updatePtk(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Ptk
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM jenis_ptk WHERE id_ptk = ?';
    const queryDelete = 'DELETE FROM jenis_ptk WHERE id_ptk = ?';

    // import to model
    deletePtk(res, querySearch, queryDelete, req.params.id);
};
