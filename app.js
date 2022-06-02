const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// for insert data
app.post('/api/identity', (req,  res) => {
  
  // variable data and query sql
  const data = { ...req.body };
  const querySql = 'INSERT INTO identity SET ?';

  koneksi.query(querySql, data, (err, rows, field) => {
    if(err){
      return res.status(500).json({
        message: 'Failed Insert Data',
        error: err
      });
     }
      res.status(201).json({
        success: true,
        message: 'Success Insert Data',
      });
  });
});

// for read data 
app.get('/api/identity', (req, res) => {
    // query sql
    const querySql = 'SELECT * FROM identity';

    // running querys
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ 
              message: 'Somethin When Wrong', 
              error: err 
            });
        }

        // if request success
        res.status(200).json({ 
          success: true, 
          data: rows });
    });
});

// for update data
app.put('/api/identity/:id', (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryUpdate = 'UPDATE identity SET ? WHERE id = ?';

    // run query to search data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ 
              message: 'Something When Wrong', 
              error: err
             });
        }

        // if id input same data in db
        if (rows.length) {
            // run query update
            koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ 
                      message: 'Oops!! Something When Wrong', 
                      error: err 
                    });
                }

                // if success
                res.status(200).json({ 
                  success: true, 
                  message: 'Success update data!' 
                });
            });
        } else {
            return res.status(404).json({
               message: 'Cant Find Data!', 
               success: false 
              });
        }
    });
});

// fr delete data
app.delete('/api/identity/:id', (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM identity WHERE id = ?';
    const queryDelete = 'DELETE FROM identity WHERE id = ?';

    // run query for search data
    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ 
              message: 'Woops, Something When Wrong', 
              error: err });
        }

        // if id same data in db
        if (rows.length) {
            // run query delete
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ 
                      message: 'Something When Wrong',
                       error: err 
                      });
                }

                // if delete success
                res.status(200).json({ 
                  success: true,
                   message: 'Succcess delete data!' });
            });
        } else {
            return res.status(404).json({ 
              message: 'Woops, cant find the data!', 
              success: false });
        }
    });
});

// for server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));