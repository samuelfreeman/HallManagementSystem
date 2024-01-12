const prisma = require('../utils/prismaUtil')
const adminAvailable = require('../validations/checkavailablity')


  

const addAdmin = async (req,res,next)=>{
    try{
        const data = req.body;
        const checkfirst = adminAvailable(data);

        if(!checkfirst){
            const admin = await prisma.admin.create({
                data,

            })
            password = undefined
            res.status(200).json({message: 'admin Registered', admin})
        }
       

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