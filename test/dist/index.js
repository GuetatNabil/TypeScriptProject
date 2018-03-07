(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./UpperRightCoordinate", "./Mower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpperRightCoordinate_1 = require("./UpperRightCoordinate");
    var Mower_1 = require("./Mower");
    var SmokeTest;
    (function (SmokeTest) {
        function exportMowerFromFile() {
            var fs = require("fs");
            var alphas = [];
            var mowers = [];
            var mowerList = [];
            var upperRight = new UpperRightCoordinate_1.UpperRightCoordinate(); //param 1
            fs.readFileSync("./tests/data.txt").toString()
                .split("\n").forEach(function (line, index, arr) {
                if (index === arr.length - 1 && line === "") {
                    return;
                }
                else {
                    if (index != 0) {
                        alphas.push(line);
                    }
                }
                if (index == 0) {
                    var cArray = line.split(' ');
                    upperRight.x = cArray[0];
                    upperRight.y = cArray[1];
                }
            });
            alphas.reduce(function (ar, it, i) {
                var ix = Math.floor(i / 2);
                if (!ar[ix]) {
                    ar[ix] = [];
                }
                ar[ix].push(it);
                mowers = ar;
                return ar;
            }, []);
            for (var _i = 0; _i < mowers.length; _i++) {
                var mow = mowers[_i];
                var mower = new Mower_1.Mower(); //param 1
                var posOrientation = mow[0];
                var cMow = posOrientation.split(' ');
                mower.initialx = Number(cMow[0]);
                mower.initialy = Number(cMow[1]);
                mower.initialOrientation = cMow[2];
                mower.tragett = mow[1];
                mowerList.push(mower);
            }
            //appeler la fonction deplacer en utilisant les deux parametres déja extractés du fichier
            deplacer(mowerList, upperRight);
        }
        SmokeTest.exportMowerFromFile = exportMowerFromFile;
        function deplacer(mowers, coord) {
            var maxX = coord.x;
            var maxY = coord.y;
            for (var _i = 0; _i < mowers.length; _i++) {
                var mower = mowers[_i];
                var initialx = mower.initialx;
                var initialy = mower.initialy;
                var initialOrientation = mower.initialOrientation.trim();
                var x = mower.initialx;
                var y = mower.initialy;
                var orientation = mower.initialOrientation.trim();
                var tragett = mower.tragett.trim();
                var cArray = tragett.split('');
                for (var _a = 0, cArray_1 = cArray; _a < cArray_1.length; _a++) {
                    var d = cArray_1[_a];
                    if (orientation == ("N")) {
                        if (d == 'A') {
                            orientation = "N";
                            y++;
                        }
                        else if (d == 'G') {
                            orientation = "W";
                        }
                        else if (d == 'D') {
                            orientation = "E";
                        }
                    }
                    else if (orientation == ("W")) {
                        if (d == 'A') {
                            orientation = "W";
                            x--;
                        }
                        else if (d == 'G') {
                            orientation = "S";
                        }
                        else if (d == 'D') {
                            orientation = "N";
                        }
                    }
                    else if (orientation == ("S")) {
                        if (d == 'A') {
                            orientation = "S";
                            y--;
                        }
                        else if (d == 'G') {
                            orientation = "E";
                        }
                        else if (d == 'D') {
                            orientation = "W";
                        }
                    }
                    else if (orientation == ("E")) {
                        if (d == 'A') {
                            orientation = "E";
                            x++;
                        }
                        else if (d == 'G') {
                            orientation = "N";
                        }
                        else if (d == 'D') {
                            orientation = "S";
                        }
                    }
                }
                if (x > maxX || y > maxY) {
                    console.log(initialx + " " + initialy + " " + initialOrientation);
                }
                else {
                    console.log(x + " " + y + " " + orientation);
                }
            }
        }
        SmokeTest.deplacer = deplacer;
    })(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
});
//# sourceMappingURL=index.js.map