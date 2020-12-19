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

var _Util = _interopRequireDefault(require("../utils/Util"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _LoginService = _interopRequireDefault(require("../services/LoginService"));

var _validate = require("../utils/validate");

var _user = _interopRequireDefault(require("../src/models/user"));

var util = new _Util["default"]();

var LoginController = /*#__PURE__*/function () {
  function LoginController() {
    (0, _classCallCheck2["default"])(this, LoginController);
  }

  (0, _createClass2["default"])(LoginController, null, [{
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, name, surname, email, cryptedPassword, roleId, reqFullBody, isRegisterValidateResult, password, userRes;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(req.body);
                _req$body = req.body, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, cryptedPassword = _req$body.password, roleId = _req$body.roleId;
                reqFullBody = req.body;
                isRegisterValidateResult = (0, _validate.registerValidate)(reqFullBody);

                if (!isRegisterValidateResult.res) {
                  _context.next = 19;
                  break;
                }

                _context.next = 7;
                return _bcrypt["default"].hash(cryptedPassword, 10);

              case 7:
                password = _context.sent;
                _context.prev = 8;
                _context.next = 11;
                return _LoginService["default"].register(name, surname, email, password, roleId);

              case 11:
                userRes = _context.sent;
                res.json(userRes._previousDataValues);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](8);
                console.log(_context.t0);
                return _context.abrupt("return", res.json({
                  status: "error"
                }));

              case 19:
                res.json(isRegisterValidateResult.error);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 15]]);
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
                console.log(isLoginValidateResult.res);

                if (!isLoginValidateResult.res) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 7;
                return _LoginService["default"].login(email);

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
                  roleId: userRes.roleId
                }, "secret key", {
                  expiresIn: 1000
                });
                console.log(token);
                return _context2.abrupt("return", res.json({
                  status: "ok",
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
    key: "changePassword",
    value: function () {
      var _changePassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var _req$body3, email, password;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function changePassword(_x5, _x6) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  }]);
  return LoginController;
}();

var _default = LoginController;
exports["default"] = _default;
//# sourceMappingURL=LoginController.js.map