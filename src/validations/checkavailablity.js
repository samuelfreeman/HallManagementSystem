const prisma = require('../helpers/prismaclient')

const adminAvailablity = async (email)=>{
    const admin = await prisma.admin.findUnique({
    where:{
        email,
    }
    })
    if (admin === null||admin === "null")
    return admin;
}


module.exports = {
    adminAvailablity
}