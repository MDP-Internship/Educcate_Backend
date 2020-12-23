"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _settings = require("../../server/src/config/settings");

var _helpers = _interopRequireDefault(require("../utils/helpers"));

var _AdminRoute = _interopRequireDefault(require("../admin/routes/AdminRoute"));

var app = (0, _express["default"])();
app.use(function (req, res, next) {
  var token = req.headers.authorization;

  _jsonwebtoken["default"].verify(token, _settings.encrypText, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, decoded) {
      var isAdmin, isRemoved;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(decoded);

              if (!decoded || err) {
                res.json({
                  type: false,
                  message: "Your access is denied"
                });
              }

              console.log(decoded);
              _context.next = 5;
              return _helpers["default"].isAdmin(decoded.roleId);

            case 5:
              isAdmin = _context.sent;
              _context.next = 8;
              return _helpers["default"].userIsRemoved(decoded.id);

            case 8:
              isRemoved = _context.sent;

              if (isRemoved === 1) {
                res.json({
                  type: false,
                  message: "Your account is not active"
                });
              }

              if (isAdmin === 0) {
                res.json({
                  type: false,
                  message: "Permission denied"
                });
              }

              next();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
});
app.use(_AdminRoute["default"]);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map