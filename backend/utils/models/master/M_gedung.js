import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Gedung = db.define('gedung',{
    id_gedung: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    kd_gedung: {
        type: DataTypes.STRING,
        unique: true
    },	
    nm_gedung: DataTypes.STRING,	
    jml_lantai: DataTypes.STRING,	
    panjang: DataTypes.STRING,	
    tinggi: DataTypes.STRING,	
    lebar: DataTypes.STRING,	
    keterangan: DataTypes.TEXT,	
    status: DataTypes.ENUM('active', 'nonactive')
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Gedung;