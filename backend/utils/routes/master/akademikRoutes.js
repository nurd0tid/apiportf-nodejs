import express from "express";
 
import { 
    getAllAkademik,
    createAkademik,
    getAkademikById,
    updateAkademik,
    deleteAkademik
} from "../../controllers/master/Akademik.js";
 
const router = express.Router();
 
router.get('/', getAllAkademik);
router.get('/:id', getAkademikById);
router.post('/', createAkademik);
router.put('/:id', updateAkademik);
router.delete('/:id', deleteAkademik);
 
export default router;