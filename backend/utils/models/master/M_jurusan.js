import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Jurusan = db.define('jurusan',{
    id_jurusan: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    kd_jurusan: DataTypes.INTEGER,	
    nm_jurusan: DataTypes.INTEGER,
    bidang_keahlian: DataTypes.INTEGER,
    kptsi_umum: DataTypes.INTEGER,
    kptsi_khusus: DataTypes.INTEGER,
    pejabat: DataTypes.INTEGER,
    jabatan: DataTypes.INTEGER,	
    keterangan: DataTypes.TEXT,
    status: DataTypes.ENUM('active', 'nonactive'),
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Jurusan;