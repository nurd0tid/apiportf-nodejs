const {
    insertSiswa,
    getSiswa,
    getSiswaId,
    updateSiswa,
    deleteSiswa
} = require('../../models/pengguna/M_siswa');
const multer = require('multer');
const uploadDir = '/photo_siswa/';
const storage = multer.diskStorage({
    destination: "./public"+uploadDir,
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

const upload =multer({storage: storage, dest: uploadDir });


// create Identity
exports.createData = (req, res, next) => {
  upload.single('photo')(req, res, () => {
    const data = { ...req.body,  photo: req.file === undefined ? "" : req.file.filename };
    const querySql = 'INSERT INTO siswa SET ?';

    // masukkan ke dalam model
    insertSiswa(res, querySql, data);
  });
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT photo, nipd, nisn, nm_siswa, angkatan, b.nm_jurusan, c.nm_kelas FROM siswa a LEFT JOIN jurusan b ON a.kd_jurusan=b.kd_jurusan LEFT JOIN kelas c ON a.kd_kelas=c.kd_kelas';

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
