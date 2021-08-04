//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name:String,
    shortdetails:String,
    moredetails:String,
    boxdetails:String,
    coordinatorsdetail:String,
    registrationlink:String,
    brouchurelink:String,
    programschedule:String,
    speakerslist:String,
    button:String,
    date:String,
    image:String,
    index:Number
    
});

//Model creation
var Eventdata = mongoose.model('eventdata',EventSchema);

module.exports = Eventdata;