import express from "express";
 
import { 
    getAllKmapel,
    createKmapel,
    getKmapelById,
    updateKmapel,
    deleteKmapel
} from "../../controllers/akademik/Kmapel.js";
 
const router = express.Router();
 
router.get('/', getAllKmapel);
router.get('/:id', getKmapelById);
router.post('/', createKmapel);
router.put('/:id', updateKmapel);
router.delete('/:id', deleteKmapel);
 
export default router;