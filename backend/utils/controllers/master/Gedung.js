const {
    insertGedung,
    getGedung,
    getGedungId,
    updateGedung,
    deleteGedung
} = require('../../models/master/M_gedung');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO gedung SET ?';

    // masukkan ke dalam model
    insertGedung(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM gedung';

  // import to model
  getGedung(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM gedung WHERE id_gedung = ?';

  // import to model
  getGedungId(res, querySql,  req.params.id,);
}


// update Gedung
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM gedung WHERE id_gedung = ?';
    const queryUpdate = 'UPDATE gedung SET ? WHERE id_gedung = ?';

    // import to model
    updateGedung(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Gedung
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM gedung WHERE id_gedung = ?';
    const queryDelete = 'DELETE FROM gedung WHERE id_gedung = ?';

    // import to model
    deleteGedung(res, querySearch, queryDelete, req.params.id);
};
