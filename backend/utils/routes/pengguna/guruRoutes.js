import express from "express";
 
import { 
    getAllGuru,
    createGuru,
    getGuruById,
    updateGuru,
    deleteGuru
} from "../../controllers/pengguna/Guru.js";
 
const router = express.Router();
 
router.get('/', getAllGuru);
router.get('/:id', getGuruById);
router.post('/', createGuru);
router.put('/:id', updateGuru);
router.delete('/:id', deleteGuru);
 
export default router;