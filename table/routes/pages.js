const { Router } = require("express");
const express = require("express")
const mysql = require("mysql")
const router = express.Router()


router.get('/', function(req, res){
    res.render('./index');
});
router.get('/view/index',(req,res)=>{
    res.render('./index');
});

module.exports = router