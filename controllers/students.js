function route (app) {

app.post('/student/register', function(req, res, next){
      var form = {
       firstname: req.body.firstname,
        middlename : req.body.middlename,
        lastname: req.body.lastname,
		username: req.body.username,
		password: req.body.password,
		email:req.body.email,
        gender: req.body.gender,
        address: req.body.address,
		phone_no :req.body.phone_no,
        DOB: req.body.DOB,
        state: req.body.state,
        LGA: req.body.LGA,
        course: req.body.course
	  };

	  
	     var Stu = require("../models/students.js").student;

      var reg = new Stu();
      reg.create(form, function(data, err){
		  if (data){
			res.json({"status":10, "message":"record created", data:data});
		  }else{
			  res.render('register',{
					  errors:errors
			  });
		
		  }
      
      	});

	  });
 
 app.post('/student/login', function(req, res, next){
	 var form = {
		 password: req.body.password,
		 email : req.body.email
	 }
	   var Stu = require("../models/students.js").student;

      var reg = new Stu();
      reg.create(form, function(data, err){
		  if (data){
			res.json({"status":10, "message":"record created", data:data });
		  }else{
			  res.json({"status":-10, "message":"record not created", err:err });
		  }
	  });
 });


app.get('/student/all', function (req, res, next){

    	var Stu = require("../models/students.js").student;
		
		var reg = new Stu();
		
		reg.find(function(data, err) {
			if (data){
				res.json({"status":11, "message":"record found", data: data});
			}else{
				res.json({"status":-11, "message":"record not found", err: err});
			}
			
		});
	});



app.get('/student/:id', function (req, res, next) {
		
		var Stu = require("../models/students.js").student;
		
		var reg = new Stu();
		
		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		reg.findById(id,function(data, err) {
			if (data){
				res.json({"status":11, "message":"record found", data: data});
			}else{
				res.json({"status":-11, "message":"record not found", err: err});
			}
				
		});		
	});

app.delete('/student/:id', function (req, res, next) {
		
		var Stu = require("../models/students.js").student;
		
		var reg = new Stu();
		
		if(req.params.id === ""){
				res.json({"status":"-102", "info":"(id) parameter is required"});
				return;
		}
		
		var id = req.params.id;
		reg.deleteById(id,function(data, err) {
			if (data){
				res.json({"status":13, "message":"record deleted", data: data});
			}else {
				res.json({"status":-13, "message":"record not deleted", err:err});
				}	
								
		});		
	});

app.put('/student/update/:id', function(req, res, next){
	 			var form = {
        firstname: req.body.firstname,
        middlename : req.body.middlename,
        lasttname: req.body.lasttname,
        gender: req.body.gender,
        address: req.body.address,
        email : req.body.email,
        DOB: req.body.DOB,
        state: req.body.state,
        LGA: req.body.LGA,
        course: req.body.course
      };

 			var Stu = require("../models/students.js").student;
 				
 			var reg = new Stu();
 				reg.create(form, function(data, err){
 					if (data){
 					res.json({"status":12, "message": "record updated", data:data});
 					}else{
 						res.json({"status":-12, "message": "record not updated", err:err});	
 					}
 				});
			});
};
module.exports.route = route;
