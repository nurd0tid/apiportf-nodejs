import express from "express";
 
import { 
    getAllKurikulum,
    createKurikulum,
    getKurikulumById,
    updateKurikulum,
    deleteKurikulum
} from "../../controllers/master/Kurikulum.js";
 
const router = express.Router();
 
router.get('/', getAllKurikulum);
router.get('/:id', getKurikulumById);
router.post('/', createKurikulum);
router.put('/:id', updateKurikulum);
router.delete('/:id', deleteKurikulum);
 
export default router;