"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _UserRoutes = _interopRequireDefault(require("./server/user/routes/UserRoutes"));

var _index = _interopRequireDefault(require("./server/admin/index"));

var _checkauth = _interopRequireDefault(require("./server/middleware/checkauth"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use((0, _cors["default"])());
app.use("/user", _UserRoutes["default"]);
app.use(_checkauth["default"]);
app.use("/admin", _index["default"]); // when a random route is inputed

app.get("*", function (req, res) {
  return res.status(200).send({
    message: "Welcome to this API."
  });
});
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map