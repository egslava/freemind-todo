'use strict';

let expect = require('chai').expect;
let node = require("../src/node");
let data = require("./node.test_data");

describe("MindMap Leaf Extractor (TODO-like)", function () {


    describe("Support leaf extraction", function() {
        it("for deep trees", function() {
            const mm = data.simple_in['map'];
            const leafs = node.leafs(mm);
            expect(leafs).to.deep.equal(data.simple_leaves);
        });

        it("for empty trees", function() {
            const mm = data.empty_mm_in['map'];
            const leafs = node.leafs(mm);
            expect(leafs).to.deep.equal(data.empty_mm_leaves);
        });
    });

    it("Doesn't open branch if there's a STOP sign", function() {
        const mm = data.with_stops_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_stops_out)
    });

    it("Takes only one of subleafs if there's a 'List Sign'", function() {
        const mm = data.with_lists_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_lists_out)
    });

    it("Works with hierachical lists", function() {
        const mm = data.with_list_hierachy_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_list_hieracy_out1)
    });

    it("takes into account when tasks are completed", function() {
        const mm = data.with_lists_stops_oks_in['map'];
        const leafs = node.leafs(mm);
        expect(leafs).to.deep.equal(data.with_lists_stops_oks_out)
    });

    describe("System tests", function() {
        it("correctly look for a node by ID", function() {
            const mm = data.simple_in['map'];
            const a_node = node.nodeById(mm, data.simple_find_by_id_id);
            expect(a_node).to.deep.equal(data.simple_find_by_id_out)
        });
    });

    it("doesn't quit from a lambda when return is used", function() {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [];

        arr1.forEach((elem) => {
            arr2.push(elem);
            return;
        });


        expect(arr1).to.deep.equal(arr2)
    })
});
