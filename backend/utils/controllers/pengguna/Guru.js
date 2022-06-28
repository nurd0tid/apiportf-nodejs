const {
    insertGuru,
    getGuru,
    getGuruId,
    updateGuru,
    deleteGuru
} = require('../../models/pengguna/M_guru');
const multer = require('multer');
const uploadDir = '/photo_guru/';
const storage = multer.diskStorage({
    destination: "./public"+uploadDir,
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});

const upload =multer({storage: storage, dest: uploadDir });


// create Identity
exports.createData = (req, res, next) => {
    upload.single('photo')(req, res, () => {
    const data = { 
      nip: req.body.nip,
      nik: req.body.nik,
      nm_guru: req.body.nm_guru,
      sk_cpns: req.body.sk_cpns,
      tmpt_lahir: req.body.tmpt_lahir,
      tgl_cpns: req.body.tgl_cpns,
      tgl_lahir: req.body.tgl_lahir,
      sk_pengangkatan: req.body.sk_pengangkatan,
      jenkel: req.body.jenkel,
      tmt_pengangkatan: req.body.tmt_pengangkatan,
      agama: req.body.agama,
      lemb_pengangkatan: req.body.lemb_pengangkatan,
      no_hp: req.body.no_hp,
      id_golongan: req.body.id_golongan,
      no_telp: req.body.no_telp,
      sumber_gaji: req.body.sumber_gaji,
      email: req.body.email,
      keahlian_laboratorium: req.body.keahlian_laboratorium,
      almt_rumah: req.body.almt_rumah,
      nm_ibu_kandung: req.body.nm_ibu_kandung,
      rt_rw: req.body.rt_rw,
      nm_suami_istri: req.body.nm_suami_istri,
      kode_pos: req.body.kode_pos,
      nip_suami_istri: req.body.nip_suami_istri,
      kab_kota: req.body.kab_kota,
      pekerjaan_suami_istri: req.body.pekerjaan_suami_istri,
      kecamatan: req.body.kecamatan,
      tmt_pns: req.body.tmt_pns,
      kelurahan: req.body.kelurahan,
      lisensi_kepsek: req.body.lisensi_kepsek,
      provinsi: req.body.provinsi,
      jml_sklh_binaan: req.body.jml_sklh_binaan,
      nuptk: req.body.nuptk,
      diklat_kepengawasan: req.body.diklat_kepengawasan,
      bidang_studi: req.body.bidang_studi,
      mampu_handle_kk: req.body.mampu_handle_kk,
      id_ptk: req.body.id_ptk,
      keahlian_breile: req.body.keahlian_breile,
      tgs_tambahan: req.body.tgs_tambahan,
      keahlian_bhs_isyarat: req.body.keahlian_bhs_isyarat,
      id_kepegawaian: req.body.id_kepegawaian,
      kewarganegaraan: req.body.kewarganegaraan,
      status: req.body.status,
      niy_nigk: req.body.niy_nigk,
      stts_pernikahan: req.body.stts_pernikahan,
      npwp: req.body.npwp,
      photo: req.file === undefined ? "" : req.file.filename,
     };
    const querySql = 'INSERT INTO gurus SET ?';

    // masukkan ke dalam model
    insertGuru(res, querySql, data);
    });
}

exports.readData = (req, res) => {
  // query sql
    const querySql = 'SELECT nip, photo, nm_guru, no_hp, b.stts_kepegawaian, c.nm_ptk FROM guru a LEFT JOIN stts_kepegawaian b ON a.id_kepegawaian=b.id_kepegawaian LEFT JOIN jenis_ptk c ON a.id_ptk=c.id_ptk';

  // import to model
  getGuru(res, querySql);
}

exports.readDataId = (req, res) => {
  // query sql
    const querySql = 'SELECT * FROM guru WHERE nip = ?';

  // import to model
  getGuruId(res, querySql,  req.params.id,);
}


// update Guru
exports.updateData = (req, res) => {
    // for variable and query
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM guru WHERE nip = ?';
    const queryUpdate = 'UPDATE guru SET ? WHERE nip = ?';

    // import to model
    updateGuru(res, querySearch, queryUpdate, req.params.id, data);
};

// delete Guru
exports.deleteData = (req, res) => {
    // for query sql to search data and delete
    const querySearch = 'SELECT * FROM guru WHERE nip = ?';
    const queryDelete = 'DELETE FROM guru WHERE nip = ?';

    // import to model
    deleteGuru(res, querySearch, queryDelete, req.params.id);
};
