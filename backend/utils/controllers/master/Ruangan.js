import Ruangan from "../../models/master/M_ruangan.js";
import Gedung from "../../models/master/M_gedung.js"
;
 
export const getAllRuangan = async (req, res) => {
  try {
        Ruangan.belongsTo(Gedung, {targetKey: 'kd_gedung', foreignKey : 'kd_gedung'});
        const ruangan = await Ruangan.findAll({
          include: [
            {
             model: Gedung,
             attributes: ['nm_gedung'],
            }
          ]
        });
        res.json(ruangan);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getRuanganById = async (req, res) => {
    try {
        const ruangan = await Ruangan.findAll({
            where: {
                kd_ruangan: req.params.id
            }
        });
        res.json(ruangan[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createRuangan = async (req, res) => {
    try {
        await Ruangan.create(req.body);
        res.json({
            "message": "Ruangan Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateRuangan = async (req, res) => {
    try {
        await Ruangan.update(req.body, {
            where: {
                kd_ruangan: req.params.id
            }
        });
        res.json({
            "message": "Ruangan Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteRuangan = async (req, res) => {
    try {
        await Ruangan.destroy({
            where: {
                kd_ruangan: req.params.id
            }
        });
        res.json({
            "message": "Ruangan Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
