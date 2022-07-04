import Ptk from "../../models/master/M_ptk.js";
 
export const getAllPtk = async (req, res) => {
    try {
        const ptk = await Ptk.findAll();
        res.json(ptk);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPtkById = async (req, res) => {
    try {
        const ptk = await Ptk.findAll({
            where: {
                id_ptk: req.params.id
            }
        });
        res.json(ptk[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createPtk = async (req, res) => {
    try {
        await Ptk.create(req.body);
        res.json({
            "message": "Ptk Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePtk = async (req, res) => {
    try {
        await Ptk.update(req.body, {
            where: {
                id_ptk: req.params.id
            }
        });
        res.json({
            "message": "Ptk Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePtk = async (req, res) => {
    try {
        await Ptk.destroy({
            where: {
                id_ptk: req.params.id
            }
        });
        res.json({
            "message": "Ptk Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}