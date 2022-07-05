import express from "express";
 
import { 
    getAllKelas,
    createKelas,
    getKelasById,
    updateKelas,
    deleteKelas
} from "../../controllers/master/Kelas.js";
 
const router = express.Router();
 
router.get('/', getAllKelas);
router.get('/:id', getKelasById);
router.post('/', createKelas);
router.put('/:id', updateKelas);
router.delete('/:id', deleteKelas);
 
export default router;