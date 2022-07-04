import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Akademik = db.define('th_akademik',{
    id_akademik: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    kd_thn: DataTypes.STRING,	
    nm_thn: DataTypes.STRING,	
    keterangan: DataTypes.STRING,	
    status:       DataTypes.ENUM('active', 'nonactive')
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Akademik;