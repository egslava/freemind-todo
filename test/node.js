'use strict';

const expect = require('chai').expect;
const node = require("../src/node");
const data = require("./node.test_data");

const xml2js = require('xml2js'),
    parseXml = xml2js.parseString;

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
        it("correctly looks for a node by ID", function() {
            const mm = data.simple_in['map'];
            const a_node = node.nodeById(mm, data.simple_find_by_id_id);
            expect(a_node).to.deep.equal(data.simple_find_by_id_out)
        });

        it("can return tree as a list", function() {
            const _in = data.map_without_ids['map'];
            const list = node.nodeList(_in).map( it => it['$']);
            expect(list).to.deep.equal(data.map_without_ids_list);
        });

    });

    describe("An info about task", function() {
        it("gives full path", function() {

            const mm = data.simple_in['map'];
            const tasks = data.simple_some_tasks;

            const paths = [0,1,2].map( i =>
                node.strPath(mm, tasks[i].ID)
            );

            expect(paths).to.deep.equal(data.simple_some_tasks_paths)
        });
    });

    it("works even if some nodes don't have IDs (FreeMind-specific)", function(done) {
        node.freemindFix(data.map_without_ids['map'], _in =>{
            const list = node.nodeList(_in);
            node.fixMeta(list);

            const leaves = node.leafs(_in);
            const paths = leaves.map(leaf => node.strPath(_in, leaf.ID));

            node.clearMeta(list);
            expect(paths).to.deep.equal(data.map_without_ids_out);
            done();
        });
    });
});
