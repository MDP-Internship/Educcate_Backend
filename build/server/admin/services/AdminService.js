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

var AdminService = /*#__PURE__*/function () {
  function AdminService() {
    (0, _classCallCheck2["default"])(this, AdminService);
  }

  (0, _createClass2["default"])(AdminService, null, [{
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, name, surname, email, roleId) {
        var userUpdate;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].User.update({
                  name: name,
                  surname: surname,
                  email: email,
                  roleId: roleId
                }, {
                  where: {
                    id: id
                  }
                });

              case 3:
                userUpdate = _context.sent;
                return _context.abrupt("return", userUpdate);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function updateUser(_x, _x2, _x3, _x4, _x5) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
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
                return _models["default"].User.update({
                  isRemoved: 1
                }, {
                  where: {
                    id: user.id
                  }
                });

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                return _context2.abrupt("return", 0);

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

      function deleteUser(_x6) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return AdminService;
}();

var _default = AdminService;
exports["default"] = _default;
//# sourceMappingURL=AdminService.js.map