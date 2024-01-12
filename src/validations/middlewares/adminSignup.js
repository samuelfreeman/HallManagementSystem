const prisma = require('../../utils/prismaUtil')

const adminAvailablity = async (req,res,next)=>{
    const {email} = req.body
    const admin = await prisma.admin.findUnique({
    where:{
        email,
    }
    })
    if(admin){
    res.status(400).json({message: "admin already exists"})
    }else{
        next()
    }
    
    
}


module.exports = {
    adminAvailablity
}