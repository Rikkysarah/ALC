var mongoose = require("mongoose");
var db = global.db;

var Schema = db.Schema;
var studSchema = new Schema(
    {
        reg_id : {type:String, default:""},
        firstname :{type:String, default:""},
        middlename :{type:String, default:""},
        lasttname :{type:String, default:""},
        username:{type:String, default:""},
        email:{type:String, default:""},
        password:{type:String, default:""},
        gender :{type:String, default:""},
        address :{type:String, default:""},
        phone_no :{type:String, default:""},
        DOB :{type:Date, default:""},
        state :{type:String, default:""},
        LGA :{type:String, default:""},
        course: {type:String, default:""},
        createdAt: {type: Date, default: Date.now}
        
    }

);
module.exports.studentModel= db.model('student', studSchema);

        

