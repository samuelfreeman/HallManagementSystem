const prisma = require('./prismaUtil.js');

const data = {
  fullname: 'SuperAdmin',
  email: 'super@gmail.com',
  password: 'super@123',
  telephone: '023456789',
};
exports.run = async () => {
  try {
    console.log('Checking for super admin');
    const findUsers = await prisma.admin.findMany({
      cacheStrategy: { swr: 60, ttl: 60 },
    });
    if (findUsers.length === 0) {
      const admin = await prisma.admin.create({
        data,
      });
      console.log('SuperAdmin  Created:', admin);
    } else {
      console.log('SuperAdmin already exists');
    }
  } catch (error) {
    console.error(error);
  }
};
