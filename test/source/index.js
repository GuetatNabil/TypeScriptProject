"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Input_1 = require("./Input");
var SmokeTest;
(function (SmokeTest) {
    var input = new Input_1.Input();
    function test() {
        //console.log(fs.readFileSync('C:\\Users\\Administrateur\\Desktop\\test\\tests/data.txt','utf8'));
        // var lines = require('fs').readFileSync('C:\\Users\\Administrateur\\Desktop\\test\\tests/data.txt', 'utf-8')
        // .split('\n')
        //  .filter(Boolean);
        var fs = require('fs');
        // var es = require('event-stream');
        var es = require('stream');
        var filename = 'parse-file.txt';
        var vertexes_number, edges_number;
        var edges = [];
        fs.createReadStream('C:\\Users\\Administrateur\\Desktop\\test\\tests/data.txt')
            .pipe(es.split()) // split by lines
            .pipe(es.map(function (line, next) {
            // split and convert all to numbers
            edges.push(line.split(' ').map(function (n) { return +n; }));
            next(null, line);
        })).pipe(es.wait(function (err, body) {
            // the first element is an array containing vertexes_number
            vertexes_number = edges.shift().pop();
            // the following element is an array containing edges_number
            edges_number = edges.shift().pop();
            console.log('done');
            console.log('vertexes_number: ' + vertexes_number);
            console.log('edges_number: ' + edges_number);
            console.log('edges: ' + JSON.stringify(edges, null, 3));
        }));
    }
    SmokeTest.test = test;
    function HelloWorld() {
        var maxX = input.maxX;
        var maxY = input.maxY;
        var initialx = input.initialx;
        var initialy = input.initialy;
        var initialOrientation = input.initialOrientation;
        var x = input.initialx;
        var y = input.initialy;
        var orientation = input.initialOrientation;
        var tragett = input.tragett;
        // let  str:string = "Hello";
        var cArray = tragett.split('');
        for (var _i = 0, cArray_1 = cArray; _i < cArray_1.length; _i++) {
            var d = cArray_1[_i];
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
            console.log(initialx + "," + initialy + "," + initialOrientation);
        }
        else {
            console.log(x + "," + y + "," + orientation);
        }
    }
    SmokeTest.HelloWorld = HelloWorld;
})(SmokeTest = exports.SmokeTest || (exports.SmokeTest = {}));
