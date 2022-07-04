import Kmapel from "../../models/akademik/M_kmapel.js";
 
export const getAllKmapel = async (req, res) => {
    try {
        const kmapel = await Kmapel.findAll();
        res.json(kmapel);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKmapelById = async (req, res) => {
    try {
        const kmapel = await Kmapel.findAll({
            where: {
                id_kmapel: req.params.id
            }
        });
        res.json(kmapel[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKmapel = async (req, res) => {
    try {
        await Kmapel.create(req.body);
        res.json({
            "message": "Kelompok Mapel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKmapel = async (req, res) => {
    try {
        await Kmapel.update(req.body, {
            where: {
                id_kmapel: req.params.id
            }
        });
        res.json({
            "message": "Kelompok Mapel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKmapel = async (req, res) => {
    try {
        await Kmapel.destroy({
            where: {
                id_kmapel: req.params.id
            }
        });
        res.json({
            "message": "Kelompok Mapel Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}