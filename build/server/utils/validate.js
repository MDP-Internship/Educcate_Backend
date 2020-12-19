"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerValidate = registerValidate;
exports.loginValidate = loginValidate;

var _joi = _interopRequireDefault(require("joi"));

function registerValidate(object) {
  var registerSchema = _joi["default"].object({
    name: _joi["default"].string().required().min(3),
    surname: _joi["default"].string().required().min(3),
    email: _joi["default"].string().required().min(3),
    password: _joi["default"].string().required().min(6),
    roleId: _joi["default"].number().required()
  });

  var result = registerSchema.validate(object, {
    abortEarly: false
  });

  if (result.error) {
    return {
      res: false,
      error: {
        message: result.error.message,
        value: result.error.details[0].context.value
      }
    };
  }

  return {
    res: true
  };
}

function loginValidate(object) {
  var loginSchema = _joi["default"].object({
    email: _joi["default"].string().required(),
    password: _joi["default"].string().required().min(6)
  });

  var result = loginSchema.validate(object, {
    abortEarly: false
  });

  if (result.error) {
    return {
      res: false,
      error: {
        message: result.error.message,
        value: result.error.details[0].context.value
      }
    };
  }

  return {
    res: true
  };
}
//# sourceMappingURL=validate.js.map