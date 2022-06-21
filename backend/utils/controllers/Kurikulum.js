const {
    insertKurikulum,
    getKurikulum,
    getKurikulumId,
    updateKurikulum,
    deleteKurikulum
} = require('../models/M_kurikulum');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO kurikulum SET ?';

    // masukkan ke dalam model
    insertKurikulum(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM kurikulum';

  // import to model
  getKurikulum(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM kurikulum WHERE id_kurikulum = ?';

  // import to model
  getKurikulumId(res, querySql,  req.params.id,);
}


// update Kurikulum
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM kurikulum WHERE id_kurikulum = ?';
    const queryUpdate = 'UPDATE kurikulum SET ? WHERE id_kurikulum = ?';

    // import to model
    updateKurikulum(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Kurikulum
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM kurikulum WHERE id_kurikulum = ?';
    const queryDelete = 'DELETE FROM kurikulum WHERE id_kurikulum = ?';

    // import to model
    deleteKurikulum(res, querySearch, queryDelete, req.params.id);
};
