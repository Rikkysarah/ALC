var studentDb = require("./students/students-db.js");
var StudModel = studentDb.studentModel;


function student(){

student.prototype.create= function(properties, callback){
            var reg = new StudModel(properties);
            reg.save(function(err, record){
      
                if(err){
                    callback(err);
                }else{
                    callback(record !== null ? record.toJSON() : null);
                }
            })
     }

student.prototype.find = function(callback){
        
        StudModel.find({}, function(err, record) {
          
          if(err){
              callback(err);
          }else{
              callback(record);
          }
          
      });
    };

student.prototype.findById = function(id, callback) {  
        StudModel.findOne({_id : id}).lean().exec(function(err, record) {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };

student.prototype.deleteById = function(id, callback) {  
        StudModel.deleteOne({_id : id}).lean().exec(function(err, record) {   
            if (err) {
                callback(err);
            }else {
                callback(record);
            }
            
        });
        
    };        
    
     //Updates data by ID
student.prototype.updateById = (option, callback) => {
     StudModel.findOneAndUpdate({id: option.Id}, 
     {
         $set: {
        firstname: option.firstname,
        middlename : option.middlename,
        lasttname: option.lasttname,
        gender: option.gender,
        address: option.address,
        email : option.email,
        DOB: option.DOB,
        state: option.state,
        LGA: option.LGA,
        course: option.course
         }
     },
     
     function(err, record) {
    if (err){
      callback(err);
    }else{
    callback(record);
    }
  });
};
};

module.exports.student = student;