import Kurikulum from "../../models/master/M_kurikulum.js";
 
export const getAllKurikulum = async (req, res) => {
    try {
        const kurikulum = await Kurikulum.findAll();
        res.json(kurikulum);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKurikulumById = async (req, res) => {
    try {
        const kurikulum = await Kurikulum.findAll({
            where: {
                id_kurikulum: req.params.id
            }
        });
        res.json(kurikulum[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKurikulum = async (req, res) => {
    try {
        await Kurikulum.create(req.body);
        res.json({
            "message": "Kurikulum Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKurikulum = async (req, res) => {
    try {
        await Kurikulum.update(req.body, {
            where: {
                id_kurikulum: req.params.id
            }
        });
        res.json({
            "message": "Kurikulum Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKurikulum = async (req, res) => {
    try {
        await Kurikulum.destroy({
            where: {
                id_kurikulum: req.params.id
            }
        });
        res.json({
            "message": "Kurikulum Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}