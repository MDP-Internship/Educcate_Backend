"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _util = _interopRequireDefault(require("../../utils/util"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _UserService = _interopRequireDefault(require("../services/UserService"));

var _helpers = _interopRequireDefault(require("../../utils/helpers"));

var _settings = require("../../src/config/settings");

var _validate = require("../../utils/validate");

var util = new _util["default"]();

var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, name, surname, email, cryptedPassword, _req$body$roleId, roleId, _req$body$isRemoved, isRemoved, reqFullBody, isHaveUser, isRegisterValidateResult, password, userRes;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, cryptedPassword = _req$body.password, _req$body$roleId = _req$body.roleId, roleId = _req$body$roleId === void 0 ? "0" : _req$body$roleId, _req$body$isRemoved = _req$body.isRemoved, isRemoved = _req$body$isRemoved === void 0 ? "0" : _req$body$isRemoved;
                reqFullBody = req.body;
                _context.next = 4;
                return _helpers["default"].isHaveUser(email);

              case 4:
                isHaveUser = _context.sent;

                if (isHaveUser) {
                  _context.next = 23;
                  break;
                }

                isRegisterValidateResult = (0, _validate.registerValidate)(reqFullBody);

                if (!isRegisterValidateResult.type) {
                  _context.next = 22;
                  break;
                }

                _context.next = 10;
                return _bcrypt["default"].hash(cryptedPassword, 10);

              case 10:
                password = _context.sent;
                _context.prev = 11;
                _context.next = 14;
                return _UserService["default"].register(name, surname, email, password, roleId, isRemoved);

              case 14:
                userRes = _context.sent;
                res.json({
                  type: true,
                  data: userRes._previousDataValues
                });
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](11);
                console.log(_context.t0);
                return _context.abrupt("return", res.json({
                  type: false,
                  message: _context.t0
                }));

              case 22:
                res.json(isRegisterValidateResult.error);

              case 23:
                res.send({
                  type: false,
                  message: "email adresi kullanımda"
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 18]]);
      }));

      function register(_x, _x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, reqFullBody, isLoginValidateResult, userRes, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                reqFullBody = req.body;
                isLoginValidateResult = (0, _validate.loginValidate)(reqFullBody);
                console.log(isLoginValidateResult.type);

                if (!isLoginValidateResult.type) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 7;
                return _UserService["default"].login(email);

              case 7:
                userRes = _context2.sent;

                if (userRes) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.json({
                  status: "error",
                  error: "user not found"
                }));

              case 10:
                _context2.next = 12;
                return _bcrypt["default"].compare(password, userRes.password);

              case 12:
                if (!_context2.sent) {
                  _context2.next = 16;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  id: userRes.id,
                  name: userRes.name,
                  email: userRes.email,
                  roleId: userRes.roleId,
                  isRemoved: userRes.isRemoved
                }, _settings.encrypText, {
                  expiresIn: 1000
                });
                console.log(token);
                return _context2.abrupt("return", res.json({
                  type: true,
                  token: token
                }));

              case 16:
                res.json({
                  error: "e-mail and password incorrect"
                });

              case 17:
                res.json(isLoginValidateResult.error);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "userGetAll",
    value: function () {
      var _userGetAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var getAllResult, data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _UserService["default"].getAll();

              case 2:
                getAllResult = _context3.sent;
                data = getAllResult.map(function (i) {
                  return {
                    id: i.id,
                    name: i.name,
                    surname: i.surname,
                    email: i.email,
                    roleId: i.roleId
                  };
                });
                res.json(data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function userGetAll(_x5, _x6) {
        return _userGetAll.apply(this, arguments);
      }

      return userGetAll;
    }()
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=UserController.js.map