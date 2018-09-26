const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var request = require('request');
var localStorage = require('localStorage')
mongoose.connect('mongodb://lalith:Lalith123@cluster0-shard-00-00-kpxwj.gcp.mongodb.net:27017,cluster0-shard-00-01-kpxwj.gcp.mongodb.net:27017,cluster0-shard-00-02-kpxwj.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
var users = mongoose.model('users' ,{
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
});

router.use((req,res,next)=> {
    debugger
    if(localStorage.getItem('auth_token')!=null) {
        if(req.header('idd') == localStorage.getItem('auth_token'))
        { 
            next();
        }
        else {
            console.log(req.body);
            return res.status(501).send("http intersecpetor failed ");
        }
    } else {
        if(req.originalUrl=='/api/login' || req.originalUrl=='/api/logout'){
             next(); 
        } else {
            console.log(req.body);
            return res.status(501).send("http intersecpetor failed ");
        } 
    } 
});

router.post('/login',(req,res)=>{
    if(req.body.token) {
        localStorage.setItem('auth_token', req.body.token);
        res.send({"status":true,'message':'successfully Logged in'});
    } 
});
router.get('/logout',(req,res)=>{
        localStorage.removeItem('auth_token');
        res.send({"status":true,'message':'successfully Logged out'});
});

router.get('/insert',(req,res)=>{

    res.send({status:'connected to server'});
    // var user = new users ({
    //     name:'lalith',
    //     email:'lalith889',
    //     phone:85555552
    // });
    // user.save().then((result)=>{
    //     console.log(result)
    // });
    // users.find().then((result)=>{
    //     res.send(result);
    // })
})
// middleware 



// router.get('/first', function(req,res,next){

//     return res.status(201).json({
//         name:'lalith',
//         place:'banglore',
//         age:22,
//         company:'evolution co',
//         role:'Software Developer'
//     });
// });
router.post('/second', function(req,res,next){
    res.send({status:'You connected to post request'});

});


// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://maheshtroy1:maheshtroy123@ds161620.mlab.com:61620/maheshtroy1');
// var users = mongoose.model('users' ,{
//     name:{
//         type:String,
//         trim:true
//     },
//     email:{
//         type:String
//     },
//     phone:{
//         type:Number
//     }
// });

// router.get('/allusers', (req, res)=>{
//     users.find().then((users)=>{
//         res.send(users);
//     })
// });

// router.post('/checkuser', (req,res)=>{
//     users.find({$or:[{'email':req.body.email},{'phone':req.body.phone}]}).then((user)=>{
//         if(user.length>0) {
//             res.send(user);
//         } else {
//             request(`https://2factor.in/API/V1/key/SMS/+91${req.body.phone}/AUTOGEN`, function (error, response, body) {
//                 if (!error && response.statusCode == 200) {
//                     res.send(body);
//                  }
//                 });
            
//         }
//     })
// });
// router.post('/otpvalid', (req, res)=>{
//     request(`https://2factor.in/API/V1/key/SMS/VERIFY/${req.body.sid}/${req.body.otp}`, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var user = new users ({
//                 name:req.body.user[0].name,
//                 email:req.body.user[0].email,
//                 phone:req.body.user[0].phone
//             });
//             user.save().then((result)=>{
//                 res.send({'done':true});
//             });
//          } else {
//              res.send({'done':false});
//          }
//         });
// });



//exports
module.exports = router;


