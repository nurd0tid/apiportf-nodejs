import Ruangan from "../../models/master/M_ruangan.js";
import Gedung from "../../models/master/M_gedung.js"
;
 
export const getAllRuangan = async (req, res) => {
  try {
        Ruangan.belongsTo(Gedung, {targetKey: 'kd_gedung', foreignKey : 'kd_gedung'});
        const ruangan = await Ruangan.findAll({
          include: [
            {
             model: Gedung
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

// const {
//     insertRuangan,
//     getRuangan,
//     getRuanganId,
//     updateRuangan,
//     deleteRuangan
// } = require('../../models/master/M_ruangan');


// // create Identity
// exports.createData = (req, res, next) => {
//     const data = { ...req.body };
//     const querySql = 'INSERT INTO ruangan SET ?';

//     // masukkan ke dalam model
//     insertRuangan(res, querySql, data);
// }

// exports.readData = (req, res) => {
//   // query sql
//     const querySql = 'SELECT r.kd_ruangan, nm_gedung, nm_ruangan, kps_belajar, kps_ujian, r.keterangan, r.status FROM ruangan r JOIN gedung g ON r.kd_gedung = g.kd_gedung ORDER BY r.kd_ruangan DESC';

//   // import to model
//   getRuangan(res, querySql);
// }

// exports.readDataId = (req, res) => {
//   // query sql
//     const querySql = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';

//   // import to model
//   getRuanganId(res, querySql,  req.params.id,);
// }


// // update Ruangan
// exports.updateData = (req, res) => {
//     // for variable and query
//     const data = { ...req.body };
//     const querySearch = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';
//     const queryUpdate = 'UPDATE ruangan SET ? WHERE kd_ruangan = ?';

//     // import to model
//     updateRuangan(res, querySearch, queryUpdate, req.params.id, data);
// };

// // delete Ruangan
// exports.deleteData = (req, res) => {
//     // for query sql to search data and delete
//     const querySearch = 'SELECT * FROM ruangan WHERE kd_ruangan = ?';
//     const queryDelete = 'DELETE FROM ruangan WHERE kd_ruangan = ?';

//     // import to model
//     deleteRuangan(res, querySearch, queryDelete, req.params.id);
// };
