"use strict";

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.promise");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var a = new Promise();

var Foo =
/*#__PURE__*/
function () {
  function Foo() {
    _classCallCheck(this, Foo);

    this.name = "hp";
  }

  _createClass(Foo, [{
    key: "somemethod",
    value: function somemethod() {
      console.log(this.name);
    }
  }, {
    key: "arrow",
    value: function arrow(method) {
      var _this = this;

      return function () {
        for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
          num[_key] = arguments[_key];
        }

        method.apply(_this, num);
      };
    }
  }]);

  return Foo;
}();

var foo = new Foo();