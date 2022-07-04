import express from "express";
 
import { 
    getAllJurusan,
    createJurusan,
    getJurusanById,
    updateJurusan,
    deleteJurusan
} from "../../controllers/master/Jurusan.js";
 
const router = express.Router();
 
router.get('/', getAllJurusan);
router.get('/:id', getJurusanById);
router.post('/', createJurusan);
router.put('/:id', updateJurusan);
router.delete('/:id', deleteJurusan);
 
export default router;