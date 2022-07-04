import Golongan from "../../models/master/M_golongan.js";
 
export const getAllGolongan = async (req, res) => {
    try {
        const golongan = await Golongan.findAll();
        res.json(golongan);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getGolonganById = async (req, res) => {
    try {
        const golongan = await Golongan.findAll({
            where: {
                id_golongan: req.params.id
            }
        });
        res.json(golongan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createGolongan = async (req, res) => {
    try {
        await Golongan.create(req.body);
        res.json({
            "message": "Golongan Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateGolongan = async (req, res) => {
    try {
        await Golongan.update(req.body, {
            where: {
                id_golongan: req.params.id
            }
        });
        res.json({
            "message": "Golongan Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteGolongan = async (req, res) => {
    try {
        await Golongan.destroy({
            where: {
                id_golongan: req.params.id
            }
        });
        res.json({
            "message": "Golongan Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}