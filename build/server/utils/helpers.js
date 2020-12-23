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

var _models = _interopRequireDefault(require("../src/models/"));

var Helpers = /*#__PURE__*/function () {
  function Helpers() {
    (0, _classCallCheck2["default"])(this, Helpers);
  }

  (0, _createClass2["default"])(Helpers, null, [{
    key: "isHaveUser",
    value: function () {
      var _isHaveUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", false);

              case 6:
                return _context.abrupt("return", true);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function isHaveUser(_x) {
        return _isHaveUser.apply(this, arguments);
      }

      return isHaveUser;
    }()
  }, {
    key: "isAdmin",
    value: function () {
      var _isAdmin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return _models["default"].User.findOne({
                  where: {
                    id: user.roleId
                  }
                });

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                return _context2.abrupt("return", null);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function isAdmin(_x2) {
        return _isAdmin.apply(this, arguments);
      }

      return isAdmin;
    }()
  }, {
    key: "userIsRemoved",
    value: function () {
      var _userIsRemoved = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                user = _context3.sent;
                return _context3.abrupt("return", user.isRemoved);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function userIsRemoved(_x3) {
        return _userIsRemoved.apply(this, arguments);
      }

      return userIsRemoved;
    }()
  }]);
  return Helpers;
}();

var _default = Helpers;
exports["default"] = _default;
//# sourceMappingURL=helpers.js.map