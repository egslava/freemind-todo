'use strict';

let expect = require('chai').expect;
let node = require("../src/node");
let data = require("./node.test_data");

describe("MindMap Leaf Extractor (TODO-like)", () =>{


    describe("Support leaf extraction", () =>{
        it("for deep trees", () =>{
            const mm = data.simple_in['map'];
            const leafs = node.leafs(mm);
            expect(leafs).to.deep.equal(data.simple_leaves);
        });

        it("for empty trees", () => {
            const mm = data.empty_mm_in['map'];
            const leafs = node.leafs(mm);
            expect(leafs).to.deep.equal(data.empty_mm_leaves);
        });
    });

    it("Doesn't open branch if there's a STOP sign", () =>{
        const mm = data.with_stops_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_stops_out)
    });

    it("Takes only one of subleafs if there's a 'List Sign'", () => {
        const mm = data.with_lists_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_lists_out)
    });

    it("Also works with hierachical lists", () => {
        const mm = data.with_list_hierachy_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_list_hieracy_out1)
    });

    it("Doesn't corrupt files", () =>{
        fail("Not implemented")
    });
});
