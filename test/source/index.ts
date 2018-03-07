import {Input} from "./Input";
import fs = require('fs');
import {UpperRightCoordinate} from "./UpperRightCoordinate";
import {Mower, Mower} from "./Mower";


export  module SmokeTest{



    export function exportMowerFromFile(){

        var fs = require("fs");
        let alphas:string[]= [];
        let mowers:string[]= [];
        var mowerList: Mower[] = [];
        var upperRight = new UpperRightCoordinate(); //param 1
        fs.readFileSync("./tests/data.txt").toString()
            .split("\n").forEach(function(line, index, arr) {
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
        alphas.reduce((ar, it, i) => {
            const ix = Math.floor(i/2);

            if(!ar[ix]) {
                ar[ix] = [];
            }

            ar[ix].push(it);



            mowers=ar;
            return ar;
        }, []);

        for (var _i = 0; _i < mowers.length; _i++)

        {
            var mow=mowers[_i];

            var mower = new Mower(); //param 1

            var posOrientation = mow[0];

            var cMow = posOrientation.split(' ');

            mower.initialx =Number(cMow[0]) ;
            mower.initialy = Number(cMow[1]) ;
            mower.initialOrientation=cMow[2];
            mower.tragett=mow[1];
            mowerList.push(mower);
        }



//appeler la fonction deplacer en utilisant les deux parametres déja extractés du fichier
        deplacer(mowerList,upperRight);
    }





    export  function deplacer(mowers:Mower[] ,coord:UpperRightCoordinate){

        let  maxX:number = coord.x;
        let  maxY:number = coord.y;


        for (var _i = 0; _i < mowers.length; _i++)

        {
            var mower =mowers[_i];
            var  initialx:number = mower.initialx;

            var  initialy:number = mower.initialy;

            var  initialOrientation:string = mower.initialOrientation.trim();

            var  x:number = mower.initialx;

            var  y:number = mower.initialy;

            var  orientation:string =mower.initialOrientation.trim();

            var  tragett:string = mower.tragett.trim();


            var cArray = tragett.split('');

            for (let d of cArray ) {
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



                else if (orientation ==("S")) {
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

            if(x>maxX || y>maxY)
            {
                console.log(initialx+" "+initialy+" "+initialOrientation);
            }
            else {
                console.log(x+" "+y+" "+orientation);
            }
        }



    }
}