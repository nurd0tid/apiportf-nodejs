import express from "express";
 
import { 
    getAllGedung,
    createGedung,
    getGedungById,
    updateGedung,
    deleteGedung
} from "../../controllers/master/Gedung.js";
 
const router = express.Router();
 
router.get('/', getAllGedung);
router.get('/:id', getGedungById);
router.post('/', createGedung);
router.put('/:id', updateGedung);
router.delete('/:id', deleteGedung);
 
export default router;