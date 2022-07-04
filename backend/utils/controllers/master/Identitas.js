import Identitas from "../../models/master/M_identitas.js"; 
 
export const getIdentitasById = async (req, res) => {
    try {
        const identitas = await Identitas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(identitas[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateIdentitas = async (req, res) => {
    try {
        await Identitas.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Identitas Sekolah Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

