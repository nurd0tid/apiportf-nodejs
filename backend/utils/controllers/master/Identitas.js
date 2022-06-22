const {
    getIdentitasId,
    updateIdentitas,
} = require('../../models/master/M_identitas');


exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identitas_sekolah WHERE id = ?';

  // import to model
  getIdentitasId(res, querySql,  req.params.id,);
}

// update Identitas
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM identitas_sekolah WHERE id = ?';
    const queryUpdate = 'UPDATE identitas_sekolah SET ? WHERE id = ?';

    // import to model
    updateIdentitas(res, querySearch, queryUpdate, req.params.id, data);
};