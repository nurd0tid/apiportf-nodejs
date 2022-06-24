const {
    insertKelas,
    getKelas,
    getKelasId,
    updateKelas,
    deleteKelas
} = require('../../models/master/M_kelas');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO kelas SET ?';

    // masukkan ke dalam model
    insertKelas(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT kd_kelas, nm_kelas, nm_guru, nm_jurusan, nm_ruangan, nm_gedung, jml_siswa FROM kelas a LEFT JOIN guru b ON a.nip=b.nip LEFT JOIN jurusan c ON a.kd_jurusan=c.kd_jurusan LEFT JOIN ruangan d ON a.kd_ruangan=d.kd_ruangan LEFT JOIN gedung e ON d.kd_gedung=e.kd_gedung';

  // import to model
  getKelas(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM kelas WHERE kd_kelas = ?';

  // import to model
  getKelasId(res, querySql,  req.params.id,);
}


// update Kelas
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM kelas WHERE kd_kelas = ?';
    const queryUpdate = 'UPDATE kelas SET ? WHERE kd_kelas = ?';

    // import to model
    updateKelas(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Kelas
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM kelas WHERE kd_kelas = ?';
    const queryDelete = 'DELETE FROM kelas WHERE kd_kelas = ?';

    // import to model
    deleteKelas(res, querySearch, queryDelete, req.params.id);
};
