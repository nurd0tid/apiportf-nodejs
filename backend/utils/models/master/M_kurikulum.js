import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Kurikulum = db.define('kurikulum',{
    id_kurikulum: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nm_kurikulum: DataTypes.STRING,	
    status:       DataTypes.ENUM('active', 'nonactive')
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Kurikulum;