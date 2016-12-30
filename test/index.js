'use strict';

let expect = require('chai').expect;
let data = require("./node.test_data");
let index = require("../index");

describe("Works with files (virtual / non-real files)", () => {

    it("Supports new MindMap format", () => {
        const mm = data.simple_in;
        const output = index.xmler.buildObject(mm);
        expect(output).to.not.contain("<?xml");
    });
})
