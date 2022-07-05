import Kelas from "../../models/master/M_kelas.js";
import Guru from "../../models/pengguna/M_guru.js";
import Jurusan from "../../models/master/M_jurusan.js";
import Ruangan from "../../models/master/M_ruangan.js";
import Gedung from "../../models/master/M_gedung.js";
 
export const getAllKelas = async (req, res) => {
  try {
        Kelas.belongsTo(Guru, {targetKey: 'nip', foreignKey : 'nip'});
        Kelas.belongsTo(Jurusan, {targetKey: 'kd_jurusan', foreignKey : 'kd_jurusan'});
        Kelas.belongsTo(Ruangan, {targetKey: 'kd_ruangan', foreignKey : 'kd_ruangan'});
        // Ruangan.belongsTo(Gedung, {targetKey: 'kd_gedung', foreignKey : 'kd_gedung'});
        const response = await Kelas.findAll({
          attributes: [
            'kd_kelas',
            'nm_kelas',
            'kd_ruangan',
            'jml_siswa'
          ],
          include: [
            {
             model: Guru,
             attributes: ['nm_guru'],
            },
            {
             model: Jurusan,
             attributes: ['nm_jurusan'],
            },
            {
             model: Ruangan,
             attributes: ['nm_ruangan'],
            },
            // {
            //  model: Gedung,
            //  attributes: ['nm_gedung'],
            // },
          ]
        });
        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKelasById = async (req, res) => {
    try {
        const kelas = await Kelas.findAll({
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json(kelas[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKelas = async (req, res) => {
    try {
        await Kelas.create(req.body);
        res.json({
            "message": "Kelas Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKelas = async (req, res) => {
    try {
        await Kelas.update(req.body, {
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json({
            "message": "Kelas Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKelas = async (req, res) => {
    try {
        await Kelas.destroy({
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json({
            "message": "Kelas Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


// const {
//     insertKelas,
//     getKelas,
//     getKelasId,
//     updateKelas,
//     deleteKelas
// } = require('../../models/master/M_kelas');


// // create Identity
// exports.createData = (req, res, next) => {
//     const data = { ...req.body };
//     const querySql = 'INSERT INTO kelas SET ?';

//     // masukkan ke dalam model
//     insertKelas(res, querySql, data);
// }

// exports.readData = (req, res) => {
//   // query sql
//     const querySql = 'SELECT kd_kelas, nm_kelas, nm_guru, nm_jurusan, nm_ruangan, nm_gedung, jml_siswa FROM kelas a LEFT JOIN guru b ON a.nip=b.nip LEFT JOIN jurusan c ON a.kd_jurusan=c.kd_jurusan LEFT JOIN ruangan d ON a.kd_ruangan=d.kd_ruangan LEFT JOIN gedung e ON d.kd_gedung=e.kd_gedung';

//   // import to model
//   getKelas(res, querySql);
// }

// exports.readDataId = (req, res) => {
//   // query sql
//     const querySql = 'SELECT * FROM kelas WHERE kd_kelas = ?';

//   // import to model
//   getKelasId(res, querySql,  req.params.id,);
// }


// // update Kelas
// exports.updateData = (req, res) => {
//     // for variable and query
//     const data = { ...req.body };
//     const querySearch = 'SELECT * FROM kelas WHERE kd_kelas = ?';
//     const queryUpdate = 'UPDATE kelas SET ? WHERE kd_kelas = ?';

//     // import to model
//     updateKelas(res, querySearch, queryUpdate, req.params.id, data);
// };

// // delete Kelas
// exports.deleteData = (req, res) => {
//     // for query sql to search data and delete
//     const querySearch = 'SELECT * FROM kelas WHERE kd_kelas = ?';
//     const queryDelete = 'DELETE FROM kelas WHERE kd_kelas = ?';

//     // import to model
//     deleteKelas(res, querySearch, queryDelete, req.params.id);
// };
