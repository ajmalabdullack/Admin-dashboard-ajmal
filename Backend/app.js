const express = require('express');
const path = require('path');
const StaffData = require('./src/model/Staffdata');
const EventData = require('./src/model/Eventdata');
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
       about:req.body.about,
       image:req.body.image,
       
   }       
   var staff = new StaffData(staff);
   staff.save().then(function (data) {
    res.send(true)
    })
   
   });
    

});


//inserting Event details
app.post('/event-insert',function(req,res){

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
   
    var event = {       
       name:req.body.name,
       shortdetails:req.body.shortdetails,
       moredetails:req.body.moredetails,
       boxdetails:req.body.boxdetails,
       coordinatorsdetail:req.body.coordinatorsdetail,
       registrationlink:req.body.registrationlink,
       brouchurelink:req.body.brouchurelink,
       programschedule:req.body.programschedule,
       speakerslist:req.body.speakerslist,
       button:req.body.button,
       date:req.body.date,
       image:req.body.image,
       
   }       
   var event = new EventData(event);
   event.save().then(function (data) {
    res.send(true)
    })
   
   });
    

});

//getting event data
app.get('/events',function(req,res){
    
    EventData.find().sort({ index: 1 })
                .then(function(events){
                    res.send(events);
                });
});

//getting staff data
app.get('/staffs',function(req,res){
    
    StaffData.find().sort({ index: 1 })
                .then(function(staffs){
                    res.send(staffs);
                });
});

app.get('/staff/:id',  (req, res) => {
  
    const id = req.params.id;
      StaffData.findOne({"_id":id})
      .then((staff)=>{
          res.send(staff);
      });
  })

//deleting staff data
app.post('/Staff/remove',(req,res)=>{  
    console.log(req.body);
    id         = req.body._id
    console.log(` inside remove ${id}`);
    StaffData.deleteOne({'_id' : id})
    .then(function(staff){
        console.log('success')
        res.send(true);
    });
  
  });
///updating staff 
app.post('/staff/update',(req,res)=>{

    console.log(` inside update ${req.body.id}`);
    id          = req.body._id,
          name  = req.body.name,
    designation = req.body.designation,
    about       = req.body.about,
    image       = req.body.image
    StaffData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "designation":designation,
                                "about":about,
                                "image":image}})
   .then(function(){
       res.send();
   })

  });
  //staff update with image

  app.post('/staff/updateWithFile',(req,res)=>{

    console.log(` inside updateWithFile ${req.body}`)
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
        console.log("File is uploaded");
        // console.log(`the title is ${req.body.title}`);
    console.log(` inside update with image ${req.body.name}`);
    id          = req.body._id,
          name  = req.body.name,
    designation = req.body.designation,
    about       = req.body.about,
    image       = req.body.image
    StaffData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "designation":designation,
                                "about":about,
                                "image":image}})
   .then(function(){
       res.send();
   })
  });
  });

  //udating index
  app.put('/Staffs/updateIndex',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');     
    
    id         = req.body._id;
    title      = req.body.name;
    index      = req.body.index;
    console.log(`update of ${name} with value ${index}`);
    StaffData.findByIdAndUpdate({"_id":id},
                                {$set:{"index":index}})
   .then(function(){
       res.send();
   })

  });

  //deleting event
  app.post('/event/remove',(req,res)=>{  
    console.log(req.body);
    id         = req.body._id
    console.log(` inside remove ${id}`);
    EventData.deleteOne({'_id' : id})
    .then(function(event){
        console.log('success')
        res.send(true);
    });
  
  });

  app.get('/event/:id',  (req, res) => {
  
    const id = req.params.id;
      EventData.findOne({"_id":id})
      .then((event)=>{
          res.send(event);
      });
  })

  //udating event
  app.post('/event/update',(req,res)=>{

    console.log(` inside update ${req.body.id}`);
    id          = req.body._id,
    name = req.body.name,
    shortdetails = req.body.shortdetails,
    moredetails = req.body.moredetails,
    boxdetails = req.body.boxdetails,
    coordinatorsdetail = req.body.coordinatorsdetail,
    registrationlink = req.body.registrationlink,
    brouchurelink = req.body.brouchurelink,
    programschedule = req.body.programschedule,
    speakerslist = req.body.speakerslist,
    button = req.body.button,
    date = req.body.date,
    image = req.body.image,
    EventData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "shortdetails": shortdetails,
                                "moredetails": moredetails,
                                "boxdetails" : boxdetails,
                                "coordinatorsdetail" : coordinatorsdetail,
                                "registrationlink" : registrationlink,
                                "brouchurelink" : brouchurelink,
                                "programschedule" : programschedule,
                                "speakerslist" : speakerslist,
                                "button" : button,
                                "date" : date,
                                "image" : image}})
   .then(function(){
       res.send();
   })

  });


    //event update with image

    app.post('/event/updateWithFile',(req,res)=>{

        console.log(` inside updateWithFile ${req.body}`)
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
            console.log("File is uploaded");
            // console.log(`the title is ${req.body.title}`);
        console.log(` inside update with image ${req.body.name}`);
        id         = req.body._id,
    name = req.body.name,
    shortdetails = req.body.shortdetails,
    moredetails = req.body.moredetails,
    boxdetails = req.body.boxdetails,
    coordinatorsdetail = req.body.coordinatorsdetail,
    registrationlink = req.body.registrationlink,
    brouchurelink = req.body.brouchurelink,
    programschedule = req.body.programschedule,
    speakerslist = req.body.speakerslist,
    button = req.body.button,
    date = req.body.date,
    image = req.body.image,
    EventData.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name,
                                "shortdetails": shortdetails,
                                "moredetails": moredetails,
                                "boxdetails" : boxdetails,
                                "coordinatorsdetail" : coordinatorsdetail,
                                "registrationlink" : registrationlink,
                                "brouchurelink" : brouchurelink,
                                "programschedule" : programschedule,
                                "speakerslist" : speakerslist,
                                "button" : button,
                                "date" : date,
                                "image" : image}})
       .then(function(){
           res.send();
       })
      });
      });

      //event update index
  app.put('/events/updateIndex',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH,PUT,DELETE,OPTIONS');     
    
    id         = req.body._id;
    name      = req.body.name;
    index      = req.body.index;
    console.log(`update of ${name} with value ${index}`);
    EventData.findByIdAndUpdate({"_id":id},
                                {$set:{"index":index}})
   .then(function(){
       res.send();
   })

  });


app.listen(4000,function(){
    console.log("app listening at port 4000")
});