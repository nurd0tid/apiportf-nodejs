import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Guru = db.define('guru',{
    nip: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nik: DataTypes.STRING,
    nm_guru: DataTypes.STRING,
    sk_cpns: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_cpns: DataTypes.DATEONLY,
    tgl_lahir: DataTypes.DATEONLY,
    sk_pengangkatan: DataTypes.STRING,
    jenkel: DataTypes.ENUM('Perempuan', 'Laki - Laki'),
    tmt_pengangkatan: DataTypes.DATEONLY,
    agama: DataTypes.ENUM('Islam', 'Kristen', 'Hindu', 'Buddha', 'Katolik', 'Khonghucu'),
    lemb_pengangkatan: DataTypes.STRING,	
    no_hp: DataTypes.STRING,
    id_golongan: DataTypes.INTEGER,
    no_telp: DataTypes.STRING,
    sumber_gaji: DataTypes.STRING,
    email: DataTypes.STRING,
    keahlian_laboratorium: DataTypes.STRING,
    almt_rumah: DataTypes.TEXT,
    nm_ibu_kandung: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    nm_suami_istri: DataTypes.STRING,
    kode_pos: DataTypes.INTEGER,
    nip_suami_istri: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    pekerjaan_suami_istri: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    tmt_pns: DataTypes.DATEONLY,
    kelurahan: DataTypes.STRING,
    lisensi_kepsek: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    jml_sklh_binaan: DataTypes.INTEGER,
    nuptk: DataTypes.STRING,
    diklat_kepengawasan: DataTypes.STRING,
    bidang_studi: DataTypes.STRING,
    mampu_handle_kk: DataTypes.STRING,
    id_ptk: DataTypes.INTEGER,
    keahlian_breile: DataTypes.STRING,
    tgs_tambahan: DataTypes.STRING,
    keahlian_bhs_isyarat: DataTypes.STRING,
    id_kepegawaian: DataTypes.INTEGER,
    kewarganegaraan: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'non active'),
    niy_nigk: DataTypes.STRING,
    stts_pernikahan: DataTypes.ENUM('Menikah', 'Belum Menikah'),
    npwp: DataTypes.STRING,
    photo: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Guru;

(async()=>{
    await db.sync();
})();


// const koneksi = require('../../../config/database');
// const { responseData, responseMessage } = require('../../response-handler');

// exports.insertGuru = (response, statement, data) => {
//   koneksi.query(statement, data, (err, rows, field) => {
//     if(err){
//       return response.status(500).json({
//         message: 'Failed Insert Data',
//         error: err
//       });
//      }
//       responseMessage(response, 201, 'Success Insert Data!');
//   });
// }

// exports.getGuru = (response, statement) => {
//       // running querys
//     koneksi.query(statement, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return response.status(500).json({ 
//               message: 'Somethin When Wrong', 
//               error: err 
//             });
//         }

//         // if request success
//         responseData(response, 200, rows);
//     });
  
// }

// exports.getGuruId = (res, statement, id) => {
//       // running querys
//     koneksi.query(statement, id, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ 
//               message: 'Somethin When Wrong', 
//               error: err 
//             });
//         }

//         // if request success
//         responseData(res, 200, rows[0]);
//     });
  
// }

// exports.updateGuru = (response, searchStatement, updateStatement, id, data) => {
//     // run query to search data
//     koneksi.query(searchStatement, id, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return response.status(500).json({ 
//               message: 'Something When Wrong', 
//               error: err
//              });
//         }

//         // if id input same data in db
//         if (rows.length) {
//             // run query update
//             koneksi.query(updateStatement, [data, id], (err, rows, field) => {
//                 // error handling
//                 if (err) {
//                     return res.status(500).json({ 
//                       message: 'Oops!! Something When Wrong', 
//                       error: err 
//                     });
//                 }

//                 // if success
//                 responseMessage(response, 200, 'Success update data!');
//             });
//         } else {
//             return response.status(404).json({
//                message: 'Cant Find Data!', 
//                success: false 
//               });
//         }
//     });
// }

// exports.deleteGuru = (response, searchStatement, deleteStatement, id) => {
//       // run query for search data
//     koneksi.query(searchStatement, id, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ 
//               message: 'Woops, Something When Wrong', 
//               error: err });
//         }

//         // if id same data in db
//         if (rows.length) {
//             // run query delete
//             koneksi.query(deleteStatement, id, (err, rows, field) => {
//                 // error handling
//                 if (err) {
//                     return response.status(500).json({ 
//                       message: 'Something When Wrong',
//                        error: err 
//                       });
//                 }

//                 // if delete success
//                 responseMessage(response, 200, 'Success delete data!');
//             });
//         } else {
//             return response.status(404).json({ 
//               message: 'Woops, cant find the data!', 
//               success: false });
//         }
//     });
// }
