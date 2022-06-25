const {
    insertKmapel,
    getKmapel,
    getKmapelId,
    updateKmapel,
    deleteKmapel
} = require('../../models/akademik/M_kmapel');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO k_mapel SET ?';

    // masukkan ke dalam model
    insertKmapel(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM k_mapel';

  // import to model
  getKmapel(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM k_mapel WHERE id_kmapel = ?';

  // import to model
  getKmapelId(res, querySql,  req.params.id,);
}


// update Kmapel
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM k_mapel WHERE id_kmapel = ?';
    const queryUpdate = 'UPDATE k_mapel SET ? WHERE id_kmapel = ?';

    // import to model
    updateKmapel(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Kmapel
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM k_mapel WHERE id_kmapel = ?';
    const queryDelete = 'DELETE FROM k_mapel WHERE id_kmapel = ?';

    // import to model
    deleteKmapel(res, querySearch, queryDelete, req.params.id);
};
