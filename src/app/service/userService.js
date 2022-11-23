const usersModel = require("../models/user");
module.exports ={
    async addUser(data,file){
        try {
            data.photo = file ? file.filename : "no-avatar.png";
            const newUser = new usersModel({
              full_name: data.full_name,
              phone: data.phone,
              address: data.address,
              email: data.email,
              password: data.password,
              profilePic: data.photo,
            });
            const user = await newUser.save();      
          } catch (err) {
            console.log(err);
          }
    },
    async updateUser(id,update,file){
      try {
        console.log(update)
        console.log(id)
        if (file) {
          update.profilePic = file.filename;
        }
        await studentsModel.findOneAndUpdate(
          { _id: id },
          update,
          { upsert: true },
          function (error, doc) {
            if (doc.profilePic != "no-avatar.png" && file) {
              delImg("students", doc.profilePic);
            }
            console.log(error);
          }
        );
      } catch (err) {
        setImmediate(() => {
          return err;
        });
      }
    }
}