import Mapel from "../../models/akademik/M_mapel.js"
import Kmapel from "../../models/akademik/M_kmapel.js";
import Guru from "../../models/pengguna/M_guru.js";
import Jurusan from "../../models/master/M_jurusan.js";
import Kurikulum from "../../models/master/M_kurikulum.js";
 
export const getAllMapel = async (req, res) => {
  try {
        Mapel.belongsTo(Kmapel, {targetKey: 'id_kmapel', foreignKey : 'id_kmapel'});
        Mapel.belongsTo(Guru, {targetKey: 'nip', foreignKey : 'nip'});
        Mapel.belongsTo(Jurusan, {targetKey: 'kd_jurusan', foreignKey : 'kd_jurusan'});
        const mapel = await Mapel.findAll({
            attributes: [
                'kd_mapel',
                'nm_mapel',
                'jurusan.nm_jurusan',
                'tingkat',
                'guru.nm_guru',
                'status',
            ],
            include: [
                {
                model: Kmapel,
                attributes: [],
                },
                {
                model: Guru,
                attributes: [],
                },
                {
                model: Jurusan,
                attributes: [],
                },
            ],
            raw: true,
        });
        res.json(mapel);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getMapelById = async (req, res) => {
    try {
        Mapel.belongsTo(Kmapel, {targetKey: 'id_kmapel', foreignKey : 'id_kmapel'});
        Mapel.belongsTo(Guru, {targetKey: 'nip', foreignKey : 'nip'});
        Mapel.belongsTo(Jurusan, {targetKey: 'kd_jurusan', foreignKey : 'kd_jurusan'});
        Mapel.belongsTo(Kurikulum, {targetKey: 'id_kurikulum', foreignKey : 'id_kurikulum'});
        const mapel = await Mapel.findAll({
            attributes: [
                'kd_mapel',
                'id_kmapel',
                'k_mapel.nm_kmapel',
                'nm_mapel',
                'jurusan.nm_jurusan',
                'jurusan.kd_jurusan',
                'tingkat',
                'guru.nm_guru',
                'guru.nip',
                'kptsi_umum',
                'kptsi_khusus',
                'jml_jam',
                'status',
                'kurikulum.nm_kurikulum',
                'kurikulum.id_kurikulum'
            ],
            where: {
                kd_mapel: req.params.id
            },
            include: [
                {
                model: Kmapel,
                attributes: [],
                },
                {
                model: Guru,
                attributes: [],
                },
                {
                model: Jurusan,
                attributes: [],
                },
                {
                model: Kurikulum,
                attributes: [],
                },
            ],
            raw: true,
        });
        res.json(mapel[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createMapel = async (req, res) => {
    try {
        await Mapel.create(req.body);
        res.json({
            "message": "Mapel Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateMapel = async (req, res) => {
    try {
        await Mapel.update(req.body, {
            where: {
                kd_mapel: req.params.id
            }
        });
        res.json({
            "message": "Mapel Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteMapel = async (req, res) => {
    try {
        await Mapel.destroy({
            where: {
                kd_mapel: req.params.id
            }
        });
        res.json({
            "message": "Mapel Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
