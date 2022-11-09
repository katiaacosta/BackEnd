"use strict";

var _server = _interopRequireDefault(require("./services/server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var puerto = 8080;
_server["default"].listen(puerto, function () {
  return console.log("Escuchando puerto ".concat(puerto));
});