import { Sequelize } from "sequelize";
import db from "../../../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Guru = db.define('guru',{
    nip: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nik: DataTypes.STRING,
    nm_guru: DataTypes.STRING,
    sk_cpns: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_cpns: DataTypes.DATEONLY,
    tgl_lahir: DataTypes.DATEONLY,
    sk_pengangkatan: DataTypes.STRING,
    jenkel: DataTypes.ENUM('Perempuan', 'Laki - Laki'),
    tmt_pengangkatan: DataTypes.DATEONLY,
    agama: DataTypes.ENUM('Islam', 'Kristen', 'Hindu', 'Buddha', 'Katolik', 'Khonghucu'),
    lemb_pengangkatan: DataTypes.STRING,	
    no_hp: DataTypes.STRING,
    id_golongan: DataTypes.INTEGER,
    no_telp: DataTypes.STRING,
    sumber_gaji: DataTypes.STRING,
    email: DataTypes.STRING,
    keahlian_laboratorium: DataTypes.STRING,
    almt_rumah: DataTypes.TEXT,
    nm_ibu_kandung: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    nm_suami_istri: DataTypes.STRING,
    kode_pos: DataTypes.INTEGER,
    nip_suami_istri: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    pekerjaan_suami_istri: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    tmt_pns: DataTypes.DATEONLY,
    kelurahan: DataTypes.STRING,
    lisensi_kepsek: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    jml_sklh_binaan: DataTypes.INTEGER,
    nuptk: DataTypes.STRING,
    diklat_kepengawasan: DataTypes.STRING,
    bidang_studi: DataTypes.STRING,
    mampu_handle_kk: DataTypes.STRING,
    id_ptk: DataTypes.INTEGER,
    keahlian_breile: DataTypes.STRING,
    tgs_tambahan: DataTypes.STRING,
    keahlian_bhs_isyarat: DataTypes.STRING,
    id_kepegawaian: DataTypes.INTEGER,
    kewarganegaraan: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'non active'),
    niy_nigk: DataTypes.STRING,
    stts_pernikahan: DataTypes.ENUM('Menikah', 'Belum Menikah'),
    npwp: DataTypes.STRING,
    photo: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});
 
export default Guru;