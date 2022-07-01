const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

// API Master
const identitasRoutes = require('./utils/routes/master/identitasRoutes');
const kurikulumRoutes = require('./utils/routes/master/kurikulumRoutes');
const akademikRoutes = require('./utils/routes/master/akademikRoutes');
const gedungRoutes = require('./utils/routes/master/gedungRoutes');
const ruanganRoutes = require('./utils/routes/master/ruanganRoutes');
const golonganRoutes = require('./utils/routes/master/golonganRoutes');
const ptkRoutes = require('./utils/routes/master/ptkRoutes');
const jurusanRoutes = require('./utils/routes/master/jurusanRoutes');
const kelasRoutes = require('./utils/routes/master/kelasRoutes');
const kepegawaianRoutes = require('./utils/routes/master/kepegawaianRoutes');
// API Pengguna
const guruRoutes = require('./utils/routes/pengguna/guruRoutes');
// API Akademik
const kmapelRoutes = require('./utils/routes/akademik/kmapelRoutes');
const mapelRoutes = require('./utils/routes/akademik/mapelRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.use('/img',express.static(__dirname + '/public/img'));
app.use('/photo_guru',express.static(__dirname + '/public/photo_guru'));
// API Master
app.use('/api/identitas', identitasRoutes);
app.use('/api/kurikulum', kurikulumRoutes);
app.use('/api/akademik', akademikRoutes);
app.use('/api/gedung', gedungRoutes);
app.use('/api/ruangan', ruanganRoutes);
app.use('/api/golongan', golonganRoutes);
app.use('/api/ptk', ptkRoutes);
app.use('/api/jurusan', jurusanRoutes);
app.use('/api/kelas', kelasRoutes);
app.use('/api/kepegawaian', kepegawaianRoutes);
// API Pengguna
app.use('/api/guru', guruRoutes);
// API Akademik
app.use('/api/kmapel', kmapelRoutes);
app.use('/api/mapel', mapelRoutes);



// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));