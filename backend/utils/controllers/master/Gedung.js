import Gedung from "../../models/master/M_gedung.js";
 
export const getAllGedung = async (req, res) => {
    try {
        const gedung = await Gedung.findAll();
        res.json(gedung);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getGedungById = async (req, res) => {
    try {
        const gedung = await Gedung.findAll({
            where: {
                id_gedung: req.params.id
            }
        });
        res.json(gedung[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createGedung = async (req, res) => {
    try {
        await Gedung.create(req.body);
        res.json({
            "message": "Gedung Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateGedung = async (req, res) => {
    try {
        await Gedung.update(req.body, {
            where: {
                id_gedung: req.params.id
            }
        });
        res.json({
            "message": "Gedung Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteGedung = async (req, res) => {
    try {
        await Gedung.destroy({
            where: {
                id_gedung: req.params.id
            }
        });
        res.json({
            "message": "Gedung Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}