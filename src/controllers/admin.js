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

        res.status(200).json({message: 'admin Registered', admin})
    }catch(error){
        console.log(error)
    }
    next()
}

const removeAdmin = async (req,res,next)=>{
    try{
    const data = req.params
    const admin = await prisma.admin.findUnique({
        where:{
            data,
        }
        
        })
        res.status(200).json
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    addAdmin,
    
}