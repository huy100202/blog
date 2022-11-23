const student = require("../app/models/user");

module.exports = { checkExist: (object) => student.findOne(object) };
