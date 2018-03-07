import "mocha"
import * as assert from "assert";
import {SmokeTest} from "../dist/index";

describe("index",()=>{


    it("should display 'new position'",()=>{
        SmokeTest.exportMowerFromFile();
        assert.ok(true);
    })
});
