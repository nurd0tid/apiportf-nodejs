import Siswa from "../../models/pengguna/M_siswa.js";
import Jurusan from "../../models/master/M_jurusan.js";
import Kelas from "../../models/master/M_kelas.js";
import path from "path";
import fs from "fs";
 
export const getAllSiswa = async(req, res)=>{
    try {
        Siswa.belongsTo(Jurusan, {targetKey: 'kd_jurusan', foreignKey : 'kd_jurusan'});
        Siswa.belongsTo(Kelas, {targetKey: 'kd_kelas', foreignKey : 'kd_kelas'});
        const response = await Siswa.findAll({
          attributes: [
            'photo',
            'nipd',
            'nisn',
            'nm_siswa',
            'angkatan',
            'jurusan.nm_jurusan',
            'kela.nm_kelas'
          ],
          order: [
            ['nipd', 'DESC']
          ],
          include: [
            {
             model: Jurusan,
             attributes: [],
            },
            {
             model: Kelas,
             attributes: [],
            }
          ],
          raw: true,
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getSiswaById = async(req, res)=>{
    try {
        const response = await Siswa.findOne({
            where:{
                nipd : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createSiswa = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const photo = req.files.photo;
    const fileSize = photo.data.length;
    const ext = path.extname(photo.name);
    const fileName = photo.md5 + ext;
    const allowedType = ['.png','.jpg','.jpeg'];
 
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
    photo.mv(`./public/photo_siswa/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Siswa.create({ ...req.body, photo: fileName});
            res.status(201).json({msg: "Siswa Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
 
}
 
export const updateSiswa = async(req, res)=>{
    const siswa = await Siswa.findOne({
        where:{
            nipd : req.params.id
        }
    });
    if(!siswa) return res.status(404).json({msg: "No Data Found"});
     
    let fileName = "";
    if(req.files === null){
        fileName = siswa.image;
    }else{
        const photo = req.files.photo;
        const fileSize = photo.data.length;
        const ext = path.extname(photo.name);
        fileName = photo.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
        const filepath = `./public/photo_siswa/${siswa.photo}`;
        fs.unlinkSync(filepath);
 
        photo.mv(`./public/photo_siswa/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
     
    try {
        await Siswa.update({ ...req.body, photo: fileName},{
            where:{
                nipd: req.params.id
            }
        });
        res.status(200).json({msg: "Siswa Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteSiswa = async(req, res)=>{
    const siswa = await Siswa.findOne({
        where:{
            nipd : req.params.id
        }
    });
    if(!siswa) return res.status(404).json({msg: "No Data Found"});
 
    try {
        const filepath = `./public/photo_siswa/${siswa.photo}`;
        fs.unlinkSync(filepath);
        await Siswa.destroy({
            where:{
                nipd : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}