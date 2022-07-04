import express from "express";
 
import { 
    getAllGolongan,
    createGolongan,
    getGolonganById,
    updateGolongan,
    deleteGolongan
} from "../../controllers/master/Golongan.js";
 
const router = express.Router();
 
router.get('/', getAllGolongan);
router.get('/:id', getGolonganById);
router.post('/', createGolongan);
router.put('/:id', updateGolongan);
router.delete('/:id', deleteGolongan);
 
export default router;