const express = require('express')

const router = express.Router()

const allocation = require('../../../controllers/allocation')

router.post('/', allocation.saveAllocation)

router.get('/:id', allocation.findAllocationById)

router.get('/all/analytics', allocation.getAnalytics)

router.get('/', allocation.getAllAlacocation)

router.patch('/:id', allocation.updateAllocation)

router.delete('/:id', allocation.deleteAllocation)

module.exports = router
