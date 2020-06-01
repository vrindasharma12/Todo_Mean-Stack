const express = require('express');
var router = express.Router();
const todoservice = require('../services/service');

router.get('/', todoservice.getlist); 
router.get('/:id', todoservice.getlistById );
router.post('/', todoservice.postlist);
router.put('/:id', todoservice.updatelist);
router.delete('/:id', todoservice.deletelist);

module.exports = router;