"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
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
                for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
                    num[_key] = arguments[_key];
                }

                method.apply(_this, num);
            };
        }
    }]);

    return Foo;
}();

var foo = new Foo();