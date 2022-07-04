import express from "express";
 
import { 
    getIdentitasById,
    updateIdentitas,
} from "../../controllers/master/Identitas.js";
 
const router = express.Router();
 
router.get('/:id', getIdentitasById);
router.put('/:id', updateIdentitas);
 
export default router;