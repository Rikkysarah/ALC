function route(app)
{
var student  = require("./students");
 student.route(app);

}

module.exports.route = route;
