const {
    insertIdentity,
    getIdentity,
    getIdentityId,
    updateIdentity,
    updateIdentityId,
    deleteIdentity
} = require('../../models/master/M_identity');
const multer = require('multer');
const uploadDir = '/img/';
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
    const data = { 
      photo: req.file === undefined ? "" : req.file.filename,
      name: req.body.name,
      hobby: req.body.hobby,
      about: req.body.about,
      company: req.body.company,
      job: req.body.job,
      country: req.body.country,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      instagram: req.body.instagram,
      linkedin: req.body.linkedin,
      github: req.body.github
     };
    const querySql = 'INSERT INTO identity SET ?';
  
    // import to model
    insertIdentity(res, querySql, data);
    });
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identity';

  // import to model
  getIdentity(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identity WHERE id = ?';

  // import to model
  getIdentityId(res, querySql,  req.params.id,);
}


// update identity
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryUpdate = 'UPDATE identity SET ? WHERE id = ?';

    // import to model
    updateIdentity(res, querySearch, queryUpdate, req.params.id, data);
};

exports.updateDataId = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryUpdate = 'UPDATE identity SET ? WHERE id = ?';

    // import to model
    updateIdentityId(res, querySearch, queryUpdate, req.params.id, data);
};

// delete identity
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryDelete = 'DELETE FROM identity WHERE id = ?';

    // import to model
    deleteIdentity(res, querySearch, queryDelete, req.params.id);
};
