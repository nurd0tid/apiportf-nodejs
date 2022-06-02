const mysql = require('mysql');

// konfigurasi koneksi ke db
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'apiportf-nodejs',
  multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
  if(err) throw err;
  console.log('MySQL Connected ...');
});

module.exports = koneksi;