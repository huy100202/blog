const multer = require("multer");
const validate = require("../../helpers/validate");
const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   console.log('asdasd',req.body);
  //   //files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
  //   cb(null, "src/public/upload/users");
  // },
  filename: function (req, file, cb) {
    // tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
    const filename = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, filename + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  console.log('asdasd',req.body);
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//Khởi tạo middleware với cấu hình trên, lưu trên local của server khi dùng multer
const uploadImg = multer({ storage: storage, fileFilter: fileFilter });


module.exports = uploadImg;
