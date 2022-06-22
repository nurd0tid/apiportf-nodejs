const {
    insertRuangan,
    getRuangan,
    getRuanganId,
    updateRuangan,
    deleteRuangan
} = require('../../models/master/M_ruangan');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO ruangan SET ?';

    // masukkan ke dalam model
    insertRuangan(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM ruangan a JOIN gedung b ON a.kd_gedung=b.kd_gedung ORDER BY a.kd_ruangan DESC';

  // import to model
  getRuangan(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';

  // import to model
  getRuanganId(res, querySql,  req.params.id,);
}


// update Ruangan
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';
    const queryUpdate = 'UPDATE ruangan SET ? WHERE kd_ruangan = ?';

    // import to model
    updateRuangan(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Ruangan
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';
    const queryDelete = 'DELETE FROM ruangan WHERE kd_ruangan = ?';

    // import to model
    deleteRuangan(res, querySearch, queryDelete, req.params.id);
};
