const express = require('express');

const router = express.Router();
const blocks = require('../controllers/blocks');

router.get('/', blocks.getBlocks);
router.patch('/:blockname', blocks.changeBlock);
router.delete('/:blockname', blocks.deleteBlock);
router.post('/', blocks.saveBlock);

module.exports = router;
