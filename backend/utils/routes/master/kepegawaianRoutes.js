import express from "express";
 
import { 
    getAllKepegawaian,
    createKepegawaian,
    getKepegawaianById,
    updateKepegawaian,
    deleteKepegawaian
} from "../../controllers/master/Kepegawaian.js";
 
const router = express.Router();
 
router.get('/', getAllKepegawaian);
router.get('/:id', getKepegawaianById);
router.post('/', createKepegawaian);
router.put('/:id', updateKepegawaian);
router.delete('/:id', deleteKepegawaian);
 
export default router;