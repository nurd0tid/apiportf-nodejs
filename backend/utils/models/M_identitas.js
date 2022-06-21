
const koneksi = require('../../config/database');
const { responseData, responseMessage } = require('../response-handler');


exports.getIdentitasId = (res, statement, id) => {
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

exports.updateIdentitas = (response, searchStatement, updateStatement, id, data) => {
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