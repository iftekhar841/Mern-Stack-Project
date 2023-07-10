const express = require('express');
const user_route = express.Router();

const cors = require('cors');
user_route.use(cors());

user_route.use(express.json());
user_route.use(express.urlencoded({extended:true}));


// const multer = require('multer');
// const path = require('path');

// user_route.use(express.static("public"));


// const storage = multer.diskStorage({
//     destination:function (req, file, cb) {
//         cb(null, path.join(__dirname,"../public/userImages"),function(error, success) {
//             if(error) throw error;
//         })
//     },
//     filename:function(req, file, cb) {
//         const name = Date.now()+'-'+file.originalname;
//         cb(null, name, function(error1, success1){
//             if(error1) throw error1
//         })   
//     }
// });
const upload = multer({storage:storage});

user_route.get("", (req, res)=> {
    res.send('this is server side')
})


const user_controller = require('../controllers/userController')

user_route.post('/', user_controller.registration_user);


module.exports = user_route;