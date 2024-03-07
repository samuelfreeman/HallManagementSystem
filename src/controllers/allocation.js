const logger = require("../utils/loggerUtil");
const prisma = require("../utils/prismaUtil");
/* 
To do:
1. Error handeler to check for allocating a student to  an Occupied  room
2. Error handeler to make sure student hasnt already been already allocated to a room
3. Error handeler

*/





exports.allocation = async (req, res, next) => {
  try {
    const data = req.body;
    const allocation = await prisma.allocation.create({
      data,
    });
    res.status(200).json({
      allocationDetails: allocation,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.findAllocationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allocation = prisma.allocation.findUnique({
      where: {
        id,
      },
    });
  res.status(200).json({
     allocationDetails:allocation
  })
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

