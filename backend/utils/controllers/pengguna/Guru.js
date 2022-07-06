import Guru from "../../models/pengguna/M_guru.js";
import Kepegawaian from "../../models/master/M_kepegawaian.js";
import Ptk from "../../models/master/M_ptk.js";
import path from "path";
import fs from "fs";
 
export const getAllGuru = async(req, res)=>{
    try {
        Guru.belongsTo(Kepegawaian, {targetKey: 'id_kepegawaian', foreignKey : 'id_kepegawaian'});
        Guru.belongsTo(Ptk, {targetKey: 'id_ptk', foreignKey : 'id_ptk'});
        const response = await Guru.findAll({
            attributes: [
                'nip',
                'photo',
                'nm_guru',
                'no_hp',
                'stts_kepegawaian.stts_kepegawaian',
                'jenis_ptk.nm_ptk'
            ],
            order: [
            ['nip', 'DESC'],
            ],
            include: [
                {
                    model: Kepegawaian,
                    attributes: []
                },
                {
                    model: Ptk,
                    attributes: []
                }
            ],
            raw: true,
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getGuruById = async(req, res)=>{
    try {
        const response = await Guru.findOne({
            where:{
                nip : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createGuru = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const photo = req.files.photo;
    const fileSize = photo.data.length;
    const ext = path.extname(photo.name);
    const fileName = photo.md5 + ext;
    const allowedType = ['.png','.jpg','.jpeg'];
 
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
    photo.mv(`./public/photo_guru/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Guru.create({ ...req.body, photo: fileName});
            res.status(201).json({msg: "Guru Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
 
}
 
export const updateGuru = async(req, res)=>{
    const guru = await Guru.findOne({
        where:{
            nip : req.params.id
        }
    });
    if(!guru) return res.status(404).json({msg: "No Data Found"});
     
    let fileName = "";
    if(req.files === null){
        fileName = guru.image;
    }else{
        const photo = req.files.photo;
        const fileSize = photo.data.length;
        const ext = path.extname(photo.name);
        fileName = photo.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];
 
        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
 
        const filepath = `./public/photo_guru/${guru.photo}`;
        fs.unlinkSync(filepath);
 
        photo.mv(`./public/photo_guru/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
     
    try {
        await Guru.update({ ...req.body, photo: fileName},{
            where:{
                nip: req.params.id
            }
        });
        res.status(200).json({msg: "Guru Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteGuru = async(req, res)=>{
    const guru = await Guru.findOne({
        where:{
            nip : req.params.id
        }
    });
    if(!guru) return res.status(404).json({msg: "No Data Found"});
 
    try {
        const filepath = `./public/photo_guru/${guru.photo}`;
        fs.unlinkSync(filepath);
        await Guru.destroy({
            where:{
                nip : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}