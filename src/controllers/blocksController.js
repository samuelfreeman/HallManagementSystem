const prisma = require('../utils/prismaUtil');

const saveBlock = async (req, res, next) => {
  try {
    const data = req.body;
    const block = await prisma.block.create({
      data,
    });
    res.status(201).json({
      block,
    });
  } catch (error) {
    console.log(error);
  }
};

const getBlocks = async (req, res, next) => {
  try {
    const blocks = await prisma.block.findMany({});
    res.status(200).json({
      blocks,
    });
  } catch (error) {
    console.log(error);
  }
};

const changeBlock = async (req, res, next) => {
  try {
    const { blockname } = req.params;
    const data = req.body;
    const block = await prisma.block.update({
      where: {
        blockname,
      },
      data,
    });
    res.status(201).json({
      block,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteBlock = async (req, res, next) => {
  try {
    const { blockname } = req.params;
    await prisma.block.delete({
      where: {
        blockname,
      },
    });
    res.status(201).json({
      message: 'block has been deleted',
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
module.exports = {
  deleteBlock,
  saveBlock,
  getBlocks,
  changeBlock,
};
