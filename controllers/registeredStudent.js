///registering a new student in the hall assuming the have paid their fees 
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const student = async(req, res, next) =>{
    try{
        const data = req.body;
        const student = await prisma.student.create({
            data,
        });
        res.status(201).json({
            student,
        });
        next()
    }catch(e){
        console.log(e)
    }
    
}



module.exports = student;