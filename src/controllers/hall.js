const logger = require('../utils/loggerUtil')
const {
  registerHall,
  getHall,
  getHalls,
  editHall,
  removeHall,
} = require('../helpers/hall')

exports.saveHall = async (req, res, next) => {
  try {
    const data = req.body
    const hall = await registerHall(data)
    res.status(200).json({
      hall,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.getSingleHall = async (req, res, next) => {
  try {
    const { id } = req.params
    const hall = await getHall(id)
    res.status(200).json({
      hall,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.getAllHalls = async (req, res, next) => {
  try {
    const halls = await getHalls()
    res.status(200).json({
      halls,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
exports.updateHall = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const hall = await editHall(id, data)
    res.status(200).json({
      hall,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}

exports.deleteHall = async (req, res, next) => {
  try {
    const { id } = req.params
    const hall = await removeHall(id)
    res.status(200).json({
      hall,
    })
  } catch (error) {
    logger.error(error)
    next(error)
  }
}
