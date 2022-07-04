import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Ptk = db.define('jenis_ptk',{
    id_ptk: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nm_ptk: DataTypes.STRING,	
    keterangan: DataTypes.TEXT,	
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Ptk;