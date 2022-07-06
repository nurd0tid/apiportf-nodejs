import express from "express";
 
import { 
    getAllMapel,
    createMapel,
    getMapelById,
    updateMapel,
    deleteMapel
} from "../../controllers/akademik/Mapel.js";
 
const router = express.Router();
 
router.get('/', getAllMapel);
router.get('/:id', getMapelById);
router.post('/', createMapel);
router.put('/:id', updateMapel);
router.delete('/:id', deleteMapel);
 
export default router;