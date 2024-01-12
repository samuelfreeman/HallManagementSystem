const prisma = require("../utils/prismaUtil");
const data = {
  fullname: "SuperAdmin",
  email: "super@gmail.com",
  password: "super@123",
  telephone: "023456789",
};
exports.run = async () => {
  try {
    console.log("Checking for super admin");
    const findUsers = await prisma.admin.findMany({});
    if (findUsers.length === 0) {
      const admin = await prisma.admin.create({
        data,
      });
      console.log("SuperAdmin  Created:", admin);
    }
    console.log("SuperAdmin Available:", admin);
  } catch (error) {
    console.error(error);
  }
};