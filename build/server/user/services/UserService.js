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

var _models = _interopRequireDefault(require("../../src/models"));

var LoginService = /*#__PURE__*/function () {
  function LoginService() {
    (0, _classCallCheck2["default"])(this, LoginService);
  }

  (0, _createClass2["default"])(LoginService, null, [{
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(name, surname, email, password, roleId, isRemoved) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].User.create({
                  name: name,
                  surname: surname,
                  password: password,
                  email: email,
                  roleId: roleId,
                  isRemoved: isRemoved
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function register(_x, _x2, _x3, _x4, _x5, _x6) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
        var findUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                findUser = _context2.sent;
                return _context2.abrupt("return", findUser);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function login(_x7) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var userGet;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userGet = _models["default"].User.findAll();
                return _context3.abrupt("return", userGet);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return LoginService;
}();

var _default = LoginService;
exports["default"] = _default;
//# sourceMappingURL=UserService.js.map