"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AdminController = _interopRequireDefault(require("../controller/AdminController"));

var router = (0, _express.Router)();
router.put("/delete/:id", _AdminController["default"].deleteUser);
router.put("/update/:id", _AdminController["default"].updateUserInfo);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=AdminRoute.js.map