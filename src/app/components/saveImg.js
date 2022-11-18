const fs = require("fs");

function saveImg(req, res, next) {
  const file = req.file;
  const oldPath = req.file.path;
  const newPath = "src/public/upload/users/"+file.filename;
  console.log(file);
  console.log("src/public/upload/users/"+file.filename)
  fs.rename(oldPath, newPath, function (err) {
    if (err) console.log( err);
    console.log("Successfully renamed - AKA moved!");
  });
  next();
}

module.exports = { saveImg };
