import Kelas from "../../models/master/M_kelas.js";
import Guru from "../../models/pengguna/M_guru.js";
import Jurusan from "../../models/master/M_jurusan.js";
import Ruangan from "../../models/master/M_ruangan.js";
 
export const getAllKelas = async (req, res) => {
  try {
        Kelas.belongsTo(Guru, {targetKey: 'nip', foreignKey : 'nip'});
        Kelas.belongsTo(Jurusan, {targetKey: 'kd_jurusan', foreignKey : 'kd_jurusan'});
        Kelas.belongsTo(Ruangan, {targetKey: 'kd_ruangan', foreignKey : 'kd_ruangan'});
        const response = await Kelas.findAll({
          attributes: [
            'kd_kelas',
            'nm_kelas',
            'kd_ruangan',
            'jml_siswa',
            'guru.nm_guru',
            'jurusan.nm_jurusan',
            'ruangan.nm_ruangan'
          ],
          include: [
            {
             model: Guru,
             attributes: [],
            },
            {
             model: Jurusan,
             attributes: [],
            },
            {
             model: Ruangan,
             attributes: [],
            }
          ],
          raw: true,
        });
        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getKelasById = async (req, res) => {
    try {
        const kelas = await Kelas.findAll({
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json(kelas[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createKelas = async (req, res) => {
    try {
        await Kelas.create(req.body);
        res.json({
            "message": "Kelas Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateKelas = async (req, res) => {
    try {
        await Kelas.update(req.body, {
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json({
            "message": "Kelas Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteKelas = async (req, res) => {
    try {
        await Kelas.destroy({
            where: {
                kd_kelas: req.params.id
            }
        });
        res.json({
            "message": "Kelas Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}