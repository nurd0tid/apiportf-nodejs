import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kelas = db.define('kelas',{
    kd_kelas: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nm_kelas: DataTypes.STRING,
    nip: DataTypes.STRING,
    kd_jurusan: DataTypes.STRING,
    kd_ruangan: DataTypes.STRING,
    jml_siswa: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Kelas;