(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mower = /** @class */ (function () {
        function Mower() {
        }
        return Mower;
    }());
    exports.Mower = Mower;
});
//# sourceMappingURL=Mower.js.map