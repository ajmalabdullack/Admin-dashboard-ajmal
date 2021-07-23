const express = require('express');
const path = require('path');
const StaffData = require('./src/model/Staffdata');
const cors = require('cors');
const multer = require('multer');


var app = new express();
app.use(cors());
app.use(express.json())

//inserting Staff details
app.post('/insert',function(req,res){

    const destn = path.join(__dirname, '../',  'Admin-Dashboard-master', 'src', 'assets', 'images');
    console.log(destn);
    var storage =   multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, destn);
        },
        filename: function(req, file, cb) {
          cb(null, file.originalname);
      }
      });
    var upload = multer({ storage : storage}).single('file');

    upload(req,res,function(err) {
        if(err) {
            console.log("Error uploading file.");
        }
   
    console.log(req.body);
   
    var staff = {       
       name:req.body.name,
       designation:req.body.designation,
       email:req.body.email,
       image:req.body.image
   }       
   var staff = new StaffData(staff);
   staff.save();
   
   });

});

//getting staff data
app.get('/staffs',function(req,res){
    
    StaffData.find()
                .then(function(staffs){
                    res.send(staffs);
                });
});


app.listen(4000,function(){
    console.log("app listening at port 4000")
});