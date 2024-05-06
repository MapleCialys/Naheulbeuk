const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/:page', (req,res) =>
{
    res.render('page/' + req.params.page);
});

module.exports = router;