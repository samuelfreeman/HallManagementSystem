const prisma = require('../')

const addAdmin = async (req,res,next)=>{
    try{
        const data = req.body;
        const admin = await prisma.admin.create({
        data
    })
    res.status(200).json({message:'admin Registered Successfully', admin})
    
    }catch(error){
        console.log(error)
    }
    next()
}

const removeAdmin = async 


module.exports = {
    addAdmin,
    
}