"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var router = (0, _express.Router)();
router.post("/register", _UserController["default"].register);
router.post("/login", _UserController["default"].login);
router.get("/getAll", _UserController["default"].userGetAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=UserRoutes.js.map