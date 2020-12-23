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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _settings = require("../../src/config/settings");

var _util = _interopRequireDefault(require("../../utils/util"));

var _AdminService = _interopRequireDefault(require("../services/AdminService"));

var AdminController = /*#__PURE__*/function () {
  function AdminController() {
    (0, _classCallCheck2["default"])(this, AdminController);
  }

  (0, _createClass2["default"])(AdminController, null, [{
    key: "updateUserInfo",
    value: function () {
      var _updateUserInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var id, _req$body, name, surname, email, roleId, updateUser;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.params.id;
                _req$body = req.body, name = _req$body.name, surname = _req$body.surname, email = _req$body.email, roleId = _req$body.roleId;
                _context.next = 4;
                return _AdminService["default"].updateUser(id, name, surname, email, roleId);

              case 4:
                updateUser = _context.sent;
                console.log(updateUser);

                if (!updateUser) {
                  res.json({
                    type: false,
                    message: "kullanıcı bulunamadı"
                  });
                }

                res.json({
                  type: true,
                  message: "güncelleme işlemi başarılı"
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function updateUserInfo(_x, _x2) {
        return _updateUserInfo.apply(this, arguments);
      }

      return updateUserInfo;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, deleteUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _context2.next = 3;
                return _AdminService["default"].deleteUser(id);

              case 3:
                deleteUser = _context2.sent;

                if (!deleteUser) {
                  res.json({
                    type: false,
                    message: "User is not found"
                  });
                }

                res.json({
                  type: true,
                  message: "user is delete"
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteUser(_x3, _x4) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return AdminController;
}();

var _default = AdminController;
exports["default"] = _default;
//# sourceMappingURL=AdminController.js.map