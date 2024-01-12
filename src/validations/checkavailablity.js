const prisma = require('../helpers/prismaclient')

const adminAvailablity = async (email)=>{
    const admin = await prisma.admin.findUnique({
    where:{
        email,
    }
    })
    return admin;
}


module.exports = {
    adminAvailablity
}