import Akademik from "../../models/master/M_akademik.js";
 
export const getAllAkademik = async (req, res) => {
    try {
        const akademik = await Akademik.findAll();
        res.json(akademik);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getAkademikById = async (req, res) => {
    try {
        const akademik = await Akademik.findAll({
            where: {
                id_akademik: req.params.id
            }
        });
        res.json(akademik[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createAkademik = async (req, res) => {
    try {
        await Akademik.create(req.body);
        res.json({
            "message": "Akademik Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateAkademik = async (req, res) => {
    try {
        await Akademik.update(req.body, {
            where: {
                id_akademik: req.params.id
            }
        });
        res.json({
            "message": "Akademik Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteAkademik = async (req, res) => {
    try {
        await Akademik.destroy({
            where: {
                id_akademik: req.params.id
            }
        });
        res.json({
            "message": "Akademik Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}