import express from "express";
 
import { 
    getAllPtk,
    createPtk,
    getPtkById,
    updatePtk,
    deletePtk
} from "../../controllers/master/Ptk.js";
 
const router = express.Router();
 
router.get('/', getAllPtk);
router.get('/:id', getPtkById);
router.post('/', createPtk);
router.put('/:id', updatePtk);
router.delete('/:id', deletePtk);
 
export default router;