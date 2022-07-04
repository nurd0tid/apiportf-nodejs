import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Golongan = db.define('golongan',{
    id_golongan: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nm_golongan: DataTypes.STRING,	
    keterangan: DataTypes.TEXT,	
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Golongan;