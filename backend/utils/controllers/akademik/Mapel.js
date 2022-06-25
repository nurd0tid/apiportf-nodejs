const {
    insertMapel,
    getMapel,
    getMapelId,
    updateMapel,
    deleteMapel
} = require('../../models/akademik/M_mapel');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO mapel SET ?';

    // masukkan ke dalam model
    insertMapel(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT kd_mapel, nm_mapel, nm_jurusan, tingkat, nm_guru, a.status FROM mapel a LEFT JOIN k_mapel b ON a.id_kmapel=b.id_kmapel LEFT JOIN guru c ON a.nip=c.nip LEFT JOIN jurusan d ON a.kd_jurusan=d.kd_jurusan';

  // import to model
  getMapel(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM mapel WHERE kd_mapel = ?';

  // import to model
  getMapelId(res, querySql,  req.params.id,);
}


// update Mapel
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM mapel WHERE kd_mapel = ?';
    const queryUpdate = 'UPDATE mapel SET ? WHERE kd_mapel = ?';

    // import to model
    updateMapel(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Mapel
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM mapel WHERE kd_mapel = ?';
    const queryDelete = 'DELETE FROM mapel WHERE kd_mapel = ?';

    // import to model
    deleteMapel(res, querySearch, queryDelete, req.params.id);
};
