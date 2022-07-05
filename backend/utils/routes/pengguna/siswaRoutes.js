import express from "express";
 
import { 
    getAllSiswa,
    createSiswa,
    getSiswaById,
    updateSiswa,
    deleteSiswa
} from "../../controllers/pengguna/Siswa.js";
 
const router = express.Router();
 
router.get('/', getAllSiswa);
router.get('/:id', getSiswaById);
router.post('/', createSiswa);
router.put('/:id', updateSiswa);
router.delete('/:id', deleteSiswa);
 
export default router;