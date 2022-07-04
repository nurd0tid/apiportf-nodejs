import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Ruangan = db.define('ruangan',{
    kd_ruangan: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    kd_gedung: DataTypes.STRING,
    nm_ruangan: DataTypes.STRING,
    kps_belajar: DataTypes.INTEGER,
    kps_ujian: DataTypes.INTEGER,
    keterangan: DataTypes.TEXT,
    status: DataTypes.ENUM('active', 'nonactive'),
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Ruangan;