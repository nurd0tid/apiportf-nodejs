const {
    insertAkademik,
    getAkademik,
    getAkademikId,
    updateAkademik,
    deleteAkademik
} = require('../../models/master/M_akademik');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO th_akademik SET ?';

    // masukkan ke dalam model
    insertAkademik(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM th_akademik';

  // import to model
  getAkademik(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM th_akademik WHERE id_akademik = ?';

  // import to model
  getAkademikId(res, querySql,  req.params.id,);
}


// update Akademik
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM th_akademik WHERE id_akademik = ?';
    const queryUpdate = 'UPDATE th_akademik SET ? WHERE id_akademik = ?';

    // import to model
    updateAkademik(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Akademik
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM th_akademik WHERE id_akademik = ?';
    const queryDelete = 'DELETE FROM th_akademik WHERE id_akademik = ?';

    // import to model
    deleteAkademik(res, querySearch, queryDelete, req.params.id);
};
