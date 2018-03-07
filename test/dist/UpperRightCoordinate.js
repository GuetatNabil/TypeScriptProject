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
    var UpperRightCoordinate = /** @class */ (function () {
        function UpperRightCoordinate() {
        }
        return UpperRightCoordinate;
    }());
    exports.UpperRightCoordinate = UpperRightCoordinate;
});
//# sourceMappingURL=UpperRightCoordinate.js.map