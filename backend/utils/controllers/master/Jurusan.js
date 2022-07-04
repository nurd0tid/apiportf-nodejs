import Jurusan from "../../models/master/M_jurusan.js";
 
export const getAllJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findAll();
        res.json(jurusan);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getJurusanById = async (req, res) => {
    try {
        const jurusan = await Jurusan.findAll({
            where: {
                id_jurusan: req.params.id
            }
        });
        res.json(jurusan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createJurusan = async (req, res) => {
    try {
        await Jurusan.create(req.body);
        res.json({
            "message": "Jurusan Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateJurusan = async (req, res) => {
    try {
        await Jurusan.update(req.body, {
            where: {
                id_jurusan: req.params.id
            }
        });
        res.json({
            "message": "Jurusan Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteJurusan = async (req, res) => {
    try {
        await Jurusan.destroy({
            where: {
                id_jurusan: req.params.id
            }
        });
        res.json({
            "message": "Jurusan Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}