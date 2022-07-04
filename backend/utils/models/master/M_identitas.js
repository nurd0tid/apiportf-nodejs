
import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Identitas = db.define('identitas_sekolah',{
    nm_sekolah: DataTypes.STRING,
    npsn: DataTypes.STRING,
    nss: DataTypes.INTEGER,
    almt_sekolah: DataTypes.TEXT,
    kd_pos: DataTypes.STRING,
    no_tlp: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING
    
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Identitas;