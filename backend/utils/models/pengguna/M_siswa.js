import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Siswa = db.define('siswa',{
    nipd: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nik: DataTypes.STRING,
    nisn: DataTypes.STRING,
    tmpt_lahir: DataTypes.TEXT,
    nm_siswa: DataTypes.STRING,
    tgl_lahir: DataTypes.DATEONLY,
    kd_kelas: DataTypes.STRING,
    jenkel: DataTypes.ENUM('Perempuan', 'Laki - Laki'),
    angkatan: DataTypes.STRING,
    agama: DataTypes.ENUM('Islam', 'Kristen', 'Hindu', 'Buddha', 'Katolik', 'Khonghucu'),
    kd_jurusan: DataTypes.STRING,
    keb_khusus: DataTypes.STRING,
    almt_rumah: DataTypes.TEXT,
    jns_tinggal: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    transportasi: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    email: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    skhun: DataTypes.STRING,
    kd_pos: DataTypes.STRING,
    penerima_kjp: DataTypes.STRING,
    photo: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'non active'),
    nm_ayah: DataTypes.STRING,
    tgl_lahir_ayah: DataTypes.DATEONLY,
    pendidikan_ayah: DataTypes.STRING,
    pekerjaan_ayah: DataTypes.STRING,
    penghasilan_ayah: DataTypes.STRING,
    no_telp_ayah	: DataTypes.STRING,
    nm_ibu: DataTypes.STRING,
    tgl_lahir_ibu: DataTypes.DATEONLY,
    pendidikan_ibu: DataTypes.STRING,	
    pekerjaan_ibu: DataTypes.STRING,
    penghasilan_ibu: DataTypes.STRING,
    no_telp_ibu: DataTypes.STRING,
    nm_wali: DataTypes.STRING,
    tgl_lahir_wali: DataTypes.DATEONLY,
    pendidikan_wali: DataTypes.STRING,
    pekerjaan_wali: DataTypes.STRING,
    penghasilan_wali: DataTypes.STRING,
    no_telp_wali: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Siswa;
