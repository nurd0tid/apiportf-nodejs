import express from "express";
 
import { 
    getAllRuangan,
    createRuangan,
    getRuanganById,
    updateRuangan,
    deleteRuangan
} from "../../controllers/master/Ruangan.js";
 
const router = express.Router();
 
router.get('/', getAllRuangan);
router.get('/:id', getRuanganById);
router.post('/', createRuangan);
router.put('/:id', updateRuangan);
router.delete('/:id', deleteRuangan);
 
export default router;