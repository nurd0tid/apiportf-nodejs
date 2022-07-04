import Kepegawaian from "../../models/master/M_kepegawaian.js";
 
export const getAllKepegawaian = async (req, res) => {
    try {
        const kepegawaian = await Kepegawaian.findAll();
        res.json(kepegawaian);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKepegawaianById = async (req, res) => {
    try {
        const kepegawaian = await Kepegawaian.findAll({
            where: {
                id_kepegawaian: req.params.id
            }
        });
        res.json(kepegawaian[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKepegawaian = async (req, res) => {
    try {
        await Kepegawaian.create(req.body);
        res.json({
            "message": "Kepegawaian Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKepegawaian = async (req, res) => {
    try {
        await Kepegawaian.update(req.body, {
            where: {
                id_kepegawaian: req.params.id
            }
        });
        res.json({
            "message": "Kepegawaian Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKepegawaian = async (req, res) => {
    try {
        await Kepegawaian.destroy({
            where: {
                id_kepegawaian: req.params.id
            }
        });
        res.json({
            "message": "Kepegawaian Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}