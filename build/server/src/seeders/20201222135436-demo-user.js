"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              /**
               * Add seed commands here.
               *
               * Example:
               * await queryInterface.bulkInsert('People', [{
               *   name: 'John Doe',
               *   isBetaMember: false
               * }], {});
               */
              up: /*#__PURE__*/(function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return queryInterface.bulkInsert("Users", [{
                            name: "Abdullah",
                            surname: "Oğuz",
                            email: "abdullah.oguz@mdpgroup.com",
                            password: "123456",
                            roleId: 1,
                            isRemoved: 0,
                            createdAt: new Date(),
                            updatedAt: new Date()
                          }], {});

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3, _x4) {
                  return _ref.apply(this, arguments);
                };
              })();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }()
};
//# sourceMappingURL=20201222135436-demo-user.js.map