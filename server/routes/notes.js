const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/notes');

router.get('/', noteController.list);

router.post('/', noteController.create);

router.delete('/', noteController.delete);

module.exports = router;
