const {
    insertGuru,
    getGuru,
    getGuruId,
    updateGuru,
    deleteGuru
} = require('../../models/pengguna/M_guru');
const multer = require('multer');
const uploadDir = '/photo_guru/';
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
    const querySql = 'INSERT INTO guru SET ?';

    // masukkan ke dalam model
    insertGuru(res, querySql, data);
    });
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT nip, photo, nm_guru, no_hp, b.stts_kepegawaian, c.nm_ptk FROM guru a LEFT JOIN stts_kepegawaian b ON a.id_kepegawaian=b.id_kepegawaian LEFT JOIN jenis_ptk c ON a.id_ptk=c.id_ptk';

  // import to model
  getGuru(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM guru WHERE nip = ?';

  // import to model
  getGuruId(res, querySql,  req.params.id,);
}


// update Guru
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM guru WHERE nip = ?';
    const queryUpdate = 'UPDATE guru SET ? WHERE nip = ?';

    // import to model
    updateGuru(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Guru
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM guru WHERE nip = ?';
    const queryDelete = 'DELETE FROM guru WHERE nip = ?';

    // import to model
    deleteGuru(res, querySearch, queryDelete, req.params.id);
};
