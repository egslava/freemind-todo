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

    it("works even if some nodes don't have IDs (FreeMind-specific)", function() {
        const _in = data.map_without_ids['map'];
        const list = node.nodeList(_in);
        node.fixMeta(list);

        const leaves = node.leafs(_in);
        const paths = leaves.map(leaf => node.strPath(_in, leaf.ID));

        node.clearMeta(list);
        expect(paths).to.deep.equal(data.map_without_ids_out);
    });

    it("works even if some nodes don't have IDs (issue 4 fix)", function(next){
        const Node = require('../src/node');
        const fs = require('fs');
        const xml2js = require('xml2js'), parseXml = xml2js.parseString;
        const ui = require('../src/ui');

        fs.readFile('./test/maps/issue4.mm', (err, xmlString) => {
            if (err) throw err;

            parseXml(xmlString, (err, json) => {
                if (err){ throw err}

                const _in = json['map'];
                const nodes = Node.nodeList(_in);
                // console.log(JSON.stringify(nodes));
                Node.fixMeta(nodes);

                const leafs = Node.leafs( _in );

                // ui.checkTasksPrompt(hint, leafs, _in, Commander.rows, ()=>{
                // console.log('1');
                // console.log(leafs);
                const labels = leafs.map( (task, ind) => {
                    return {
                        name:
                            Node.getPath(_in, task.ID)
                                .map(node => node['$'].TEXT)
                                .join(" -> "),
                        value: task.ID,
                        index: ind}
                }).sort( (_1, _2) => _1.name >= _2.name );
                // console.log(labels.sort( (lbl1, lbl2) => lbl1.name < lbl2.name));

                // console.log(labels.map(label=>label.name));
                // assert that labels id are the same as
                // const leafIds = leafs.map( leaf => leaf[`ID`]).sort();
                // const labelIds = labels.map( label => label[`value`]).sort();
                // console.log(labelIds);
                // console.log(leafIds);
                expect(labels).to.deep.equal(data.map_without_ids_fix_issue4);
                Node.clearMeta(nodes);
                next();
                // console.log(labels);
                // const xml = Node.xmler.buildObject(json);

                // fs.writeFile(mindmap, xml, null, (data, err)=>{
                //     // console.log(err);
                //
                // });
                // });


                // console.log(xml);
            });
        });
    })
});
