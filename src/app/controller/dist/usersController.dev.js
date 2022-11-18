"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var usersModel = require("../models/user");

var fs = require("fs");

var UsersController =
/*#__PURE__*/
function () {
  function UsersController() {
    _classCallCheck(this, UsersController);
  }

  _createClass(UsersController, [{
    key: "register",
    value: function register(req, res) {
      res.render("users/register.pug");
    }
  }, {
    key: "store",
    value: function store(req, res) {
      var file, newUser, user;
      return regeneratorRuntime.async(function store$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              file = req.file;
              req.body.photo = file ? file.filename : "no-avatar.png";
              newUser = new usersModel({
                full_name: req.body.full_name,
                phone: req.body.phone,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password,
                profilePic: req.body.photo
              });
              _context.next = 6;
              return regeneratorRuntime.awrap(newUser.save());

            case 6:
              user = _context.sent;
              res.status(200).json(user);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              res.status(500).json(_context.t0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10]]);
    }
  }, {
    key: "login",
    value: function login(req, res) {
      var user, validated, _user$_doc, password, others;

      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(User.findOne({
                email: req.body.email
              }));

            case 3:
              user = _context2.sent;
              !user && res.status(400).json("Wrong credentials!");
              _context2.next = 7;
              return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

            case 7:
              validated = _context2.sent;
              !validated && res.status(400).json("Wrong credentials!");
              _user$_doc = user._doc, password = _user$_doc.password, others = _objectWithoutProperties(_user$_doc, ["password"]);
              res.status(200).json(others);
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              res.status(500).json(_context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }]);

  return UsersController;
}();

module.exports = new UsersController();