import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kepegawaian = db.define('stts_kepegawaian',{
    id_kepegawaian: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    stts_kepegawaian: DataTypes.STRING,	
    keterangan: DataTypes.TEXT,	
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Kepegawaian;