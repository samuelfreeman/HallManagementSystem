const prisma = require('../../utils/prismaUtil');
const bcrypt = require('../../utils/bcrypt');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const admin = await prisma.admin.findFirst({
    where: {
      email,
    },
  });
  if (admin) {
    const comparePassword = await bcrypt.compare(password, admin.password);
    if (comparePassword) {
      res.status(200).json({ message: 'logged in' });
    } else {
      // so we throw error instead
      throw new Error(400, 'Invalid password!');
      //   res.status(400).json({ message: "invalid password" });
    }
  } else {
    res.status(400).json({ message: 'admin not found, please signup' });
    next();
  }
};

module.exports = {
  login,
};
