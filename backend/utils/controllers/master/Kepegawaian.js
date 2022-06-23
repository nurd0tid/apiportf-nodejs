const {
    insertKepegawaian,
    getKepegawaian,
    getKepegawaianId,
    updateKepegawaian,
    deleteKepegawaian
} = require('../../models/master/M_kepegawaian');


// create Identity
exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO stts_kepegawaian SET ?';

    // masukkan ke dalam model
    insertKepegawaian(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM stts_kepegawaian';

  // import to model
  getKepegawaian(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM stts_kepegawaian WHERE id_kepegawaian = ?';

  // import to model
  getKepegawaianId(res, querySql,  req.params.id,);
}


// update Kepegawaian
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM stts_kepegawaian WHERE id_kepegawaian = ?';
    const queryUpdate = 'UPDATE stts_kepegawaian SET ? WHERE id_kepegawaian = ?';

    // import to model
    updateKepegawaian(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Kepegawaian
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM stts_kepegawaian WHERE id_kepegawaian = ?';
    const queryDelete = 'DELETE FROM stts_kepegawaian WHERE id_kepegawaian = ?';

    // import to model
    deleteKepegawaian(res, querySearch, queryDelete, req.params.id);
};
