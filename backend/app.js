import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import db from "./config/database.js";
// Import Module Master
import IdentitasRoutes from "./utils/routes/master/identitasRoutes.js";
import kurikulumRoutes from "./utils/routes/master/kurikulumRoutes.js";
import akademikRoutes from "./utils/routes/master/akademikRoutes.js";
import gedungRoutes from "./utils/routes/master/gedungRoutes.js";
import ruanganRoutes from "./utils/routes/master/ruanganRoutes.js";
import golonganRoutes from "./utils/routes/master/golonganRoutes.js";
import ptkRoutes from "./utils/routes/master/ptkRoutes.js";
import jurusanRoutes from "./utils/routes/master/jurusanRoutes.js";
import kelasRoutes from "./utils/routes/master/kelasRoutes.js";
import kepegawaianRoutes from "./utils/routes/master/kepegawaianRoutes.js";
// Import Module Pengguna
import siswaRoutes from "./utils/routes/pengguna/siswaRoutes.js";
import guruRoutes from "./utils/routes/pengguna/guruRoutes.js";

// Import Module Akademik
import kmapelRoutes from "./utils/routes/akademik/kmapelRoutes.js";
import mapelRoutes from "./utils/routes/akademik/mapelRoutes.js";


const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
// API Master
app.use('/api/identitas', IdentitasRoutes);
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
app.use('/api/siswa', siswaRoutes);
app.use('/api/guru', guruRoutes);

// API Akademik
app.use('/api/kmapel', kmapelRoutes);
app.use('/api/mapel', mapelRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));