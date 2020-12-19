"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _LoginController = _interopRequireDefault(require("../controllers/LoginController"));

var router = (0, _express.Router)();
router.post("/register", _LoginController["default"].register);
router.post("/login", _LoginController["default"].login);
router.post("/change-password", _LoginController["default"].changePassword);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=LoginRoutes.js.map