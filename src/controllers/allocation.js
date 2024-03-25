const logger = require('../utils/loggerUtil');
const {
  addAllocation,
  allocateById,
  editAllocation,
  loadAllocations,
  loadAnalytics,
  removeAllocation,
} = require('../helpers/allocation');

exports.saveAllocation = async (req, res, next) => {
  try {
    const data = req.body;
    const allocation = await addAllocation(data);
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
    const allocation = await allocateById(id);
    res.status(200).json({
      allocationDetails: allocation,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.updateAllocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const allocation = await editAllocation(id, data);
    res.status(200).json({
      allocation,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAllAlacocation = async (req, res, next) => {
  try {
    const allocations = await loadAllocations();
    res.status(200).json({
      allocations,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.getAnalytics = async (req, res, next) => {
  try {
    const allocation = await loadAnalytics();
    res.status(200).json({
      allocation,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

exports.deleteAllocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allocation = await removeAllocation(id);
    res.status(200).json({
      allocation,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
