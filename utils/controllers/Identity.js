const {
    insertIdentity,
    getIdentity,
    updateIdentity,
    deleteIdentity
} = require('../models/M_identity');

// create Identity
exports.createData = (req, res, next) => {
  // variable data and query sql
  const data = { ...req.body };
  const querySql = 'INSERT INTO identity SET ?';
  
  // import to model
    insertIdentity(res, querySql, data);
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM identity';

  // import to model
  getIdentity(res, querySql);
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

// delete identity
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryDelete = 'DELETE FROM identity WHERE id = ?';

    // import to model
    deleteIdentity(res, querySearch, queryDelete, req.params.id);
};
