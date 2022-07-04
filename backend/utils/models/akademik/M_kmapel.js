import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kmapel = db.define('k_mapel',{
    id_kmapel: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    jenis_kmapel: DataTypes.STRING,	
    nm_kmapel: DataTypes.STRING,	
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Kmapel;