///registering a new student in the hall assuming the have paid their fees 
const prisma = require('../helpers/prismaclient')


const registerStudent = async(req, res, next) =>{
    try{
        //checking student availability in the system before trying to register a student
        

        const data = req.body;
        const student = await prisma.student.findFirst({
            where:{
                data
            }
            
        });
        res.status(401).json({message: 'student already Exist',student})

        next()
    }catch(e){
        console.log(e)
    }
    
}



module.exports = student;