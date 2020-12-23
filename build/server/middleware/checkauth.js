"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _settings = require("../src/config/settings");

var _Util = _interopRequireDefault(require("../utils/Util"));

var app = (0, _express["default"])();
var util = new _Util["default"]();
app.use( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers.authorization;

            if (token) {
              _context.next = 4;
              break;
            }

            util.send(401, "Token cannot empty");
            return _context.abrupt("return", util.send(res));

          case 4:
            _jsonwebtoken["default"].verify(token, _settings.encrypText, function (err, decoded) {
              if (err) {
                util.setError(401, "Token not found");
                return util.send(res);
              }

              util.setError(200, "Your access is succesfull");
              req.decoded = decoded;
              next();
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = app;
//# sourceMappingURL=checkauth.js.map