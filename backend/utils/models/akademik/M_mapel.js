import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Mapel = db.define('mapel',{
    kd_mapel: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_kmapel: DataTypes.INTEGER,	
    kd_jurusan: DataTypes.STRING,
    nip: DataTypes.STRING,
    id_kurikulum: DataTypes.INTEGER,
    nm_mapel: DataTypes.STRING,	
    tingkat: DataTypes.STRING,
    kptsi_umum: DataTypes.STRING,
    kptsi_khusus: DataTypes.STRING,
    jml_jam: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'nonactive'),
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Mapel;