var express = require('express')
var router = express.Router()

router.get('/',(req, res)=>{
    res.render('user',{name:"김태경"})
})

router.get('/about',(req, res)=>{
    res.render('detail',{detail:"얼굴만 커요^^"})
})

module.exports=router