///registering a new student in the hall assuming the have paid their fees 
const prisma = require('../utils/prismaUtil')

const registerStudent = async(student) =>{
    try{
        //checking student availability in the system before trying to register a student
        const data = req.body;
        const student = await prisma.student.findUnique({
            where:{
                data
            }
        })
        return student
    
}catch(error){
    res.send(error)
}
}



module.exports = student;