'use strict';

let expect = require('chai').expect;
let data = require("./node.test_data");
let node= require("../src/node");

describe("Works with files (virtual / non-real files)", () => {

    it("Supports new MindMap format", () => {
        const mm = data.simple_in;
        const output = node.xmler.buildObject(mm);
        expect(output).to.not.contain("<?xml");
    });

    // it("Doesn't corrupt files", () =>{
        // the only difference - spaces. So I should serialize XML without spaces and ensure that it's the same
        // fail("Not implemented")
    // });
})
