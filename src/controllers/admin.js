const prisma = require('../utils/prismaUtil')
const bcrypt = require("../utils/bcrypt")

const addAdmin = async (req,res,next)=>{
    try{
        const data = req.body;
        data.password = await bcrypt.hash(data.password)
        console.log(data.password)
        const admin = await prisma.admin.create({
                data,

            })
            delete admin.password
        res.status(200).json({message: 'admin Registered', admin})
    }catch(error){
        console.log(error)
    }
    next()
}

const getAdmins = async (req,res,next)=>{
    try{
    const admin = await prisma.admin.findMany({
        
        })
        res.status(200).json({status: "successfull", admin})
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    addAdmin,
    getAdmins
}