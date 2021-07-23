//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/LibraryApp');

//Schema definition
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    name:String,
    designation:String,
    email:String,
    image:String
    
});

//Model creation
var Staffdata = mongoose.model('staffdata',StaffSchema);

module.exports = Staffdata;