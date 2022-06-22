const {
    insertJurusan,
    getJurusan,
    getJurusanId,
    updateJurusan,
    deleteJurusan
} = require('../../models/master/M_jurusan');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO jurusan SET ?';

    // masukkan ke dalam model
    insertJurusan(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM jurusan';

  // import to model
  getJurusan(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM jurusan WHERE id_jurusan = ?';

  // import to model
  getJurusanId(res, querySql,  req.params.id,);
}


// update Jurusan
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM jurusan WHERE id_jurusan = ?';
    const queryUpdate = 'UPDATE jurusan SET ? WHERE id_jurusan = ?';

    // import to model
    updateJurusan(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Jurusan
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM jurusan WHERE id_jurusan = ?';
    const queryDelete = 'DELETE FROM jurusan WHERE id_jurusan = ?';

    // import to model
    deleteJurusan(res, querySearch, queryDelete, req.params.id);
};
