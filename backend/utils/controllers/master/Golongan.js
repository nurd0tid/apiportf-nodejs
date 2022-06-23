const {
    insertGolongan,
    getGolongan,
    getGolonganId,
    updateGolongan,
    deleteGolongan
} = require('../../models/master/M_golongan');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO golongan SET ?';

    // masukkan ke dalam model
    insertGolongan(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM golongan';

  // import to model
  getGolongan(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM golongan WHERE id_golongan = ?';

  // import to model
  getGolonganId(res, querySql,  req.params.id,);
}


// update Golongan
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM golongan WHERE id_golongan = ?';
    const queryUpdate = 'UPDATE golongan SET ? WHERE id_golongan = ?';

    // import to model
    updateGolongan(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Golongan
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM golongan WHERE id_golongan = ?';
    const queryDelete = 'DELETE FROM golongan WHERE id_golongan = ?';

    // import to model
    deleteGolongan(res, querySearch, queryDelete, req.params.id);
};
