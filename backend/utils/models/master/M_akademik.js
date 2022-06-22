
const koneksi = require('../../../config/database');
const { responseData, responseMessage } = require('../../response-handler');

exports.insertAkademik = (response, statement, data) => {
  koneksi.query(statement, data, (err, rows, field) => {
    if(err){
      return response.status(500).json({
        message: 'Failed Insert Data',
        error: err
      });
     }
      responseMessage(response, 201, 'Success Insert Data!');
  });
}

exports.getAkademik = (response, statement) => {
      // running querys
    koneksi.query(statement, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ 
              message: 'Somethin When Wrong', 
              error: err 
            });
        }

        // if request success
        responseData(response, 200, rows);
    });
  
}

exports.getAkademikId = (res, statement, id) => {
      // running querys
    koneksi.query(statement, id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ 
              message: 'Somethin When Wrong', 
              error: err 
            });
        }

        // if request success
        responseData(res, 200, rows[0]);
    });
  
}

exports.updateAkademik = (response, searchStatement, updateStatement, id, data) => {
    // run query to search data
    koneksi.query(searchStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ 
              message: 'Something When Wrong', 
              error: err
             });
        }

        // if id input same data in db
        if (rows.length) {
            // run query update
            koneksi.query(updateStatement, [data, id], (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ 
                      message: 'Oops!! Something When Wrong', 
                      error: err 
                    });
                }

                // if success
                responseMessage(response, 200, 'Success update data!');
            });
        } else {
            return response.status(404).json({
               message: 'Cant Find Data!', 
               success: false 
              });
        }
    });
}

exports.deleteAkademik = (response, searchStatement, deleteStatement, id) => {
      // run query for search data
    koneksi.query(searchStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ 
              message: 'Woops, Something When Wrong', 
              error: err });
        }

        // if id same data in db
        if (rows.length) {
            // run query delete
            koneksi.query(deleteStatement, id, (err, rows, field) => {
                // error handling
                if (err) {
                    return response.status(500).json({ 
                      message: 'Something When Wrong',
                       error: err 
                      });
                }

                // if delete success
                responseMessage(response, 200, 'Success delete data!');
            });
        } else {
            return response.status(404).json({ 
              message: 'Woops, cant find the data!', 
              success: false });
        }
    });
}
