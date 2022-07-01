const {
    insertSiswa,
    getSiswa,
    getSiswaId,
    updateSiswa,
    deleteSiswa
} = require('../../models/pengguna/M_siswa');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO siswa SET ?';

    // masukkan ke dalam model
    insertSiswa(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM siswa';

  // import to model
  getSiswa(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM siswa WHERE nipd = ?';

  // import to model
  getSiswaId(res, querySql,  req.params.id,);
}


// update Siswa
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM siswa WHERE nipd = ?';
    const queryUpdate = 'UPDATE siswa SET ? WHERE nipd = ?';

    // import to model
    updateSiswa(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Siswa
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM siswa WHERE nipd = ?';
    const queryDelete = 'DELETE FROM siswa WHERE nipd = ?';

    // import to model
    deleteSiswa(res, querySearch, queryDelete, req.params.id);
};
