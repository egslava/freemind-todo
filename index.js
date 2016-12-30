#! /usr/bin/env node
'use strict';


const
    Node = require('./src/node'),
    ui = require('./src/ui');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString,
    XmlBuilder = xml2js.Builder;

const mindmap = 'sosimple.mm';

const hint = "There're your current tasks. Please, mark them after completion when you're done.";

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const leafs = Node.leafs( json['map'] );

        // console.log(JSON.stringify(json));

        // leafs.forEach( (leaf) => {
        //    console.log(leaf['TEXT'])
        // });

        // console.log(JSON.stringify(json));

        // console.log(leafs.map((it)=>JSON.stringify(it)).join(","));
        // leafs[0]['TEXT'] = "BLAAAAH";


        ui.checkTasksPrompt(hint, leafs, json['map'], ()=>{
            // console.log('1');
            const xml = new XmlBuilder().buildObject(json);
            fs.writeFile(mindmap, xml, null, (data, err)=>{
                // console.log(err);

            });
        });


        // console.log(xml);
    });
});

// TODO: FreeMind new file format
// TODO: process the case when there're no any tasks available (all are done)
// TODO: ensure file is not corrupted: https://www.npmjs.com/package/xml2js
// TODO: paths to leaf: English -> Grammar -> Unit 1
// TODO: lessons to finish (1 / 33 ) English -> Grammar -> Unit 2)
// TODO: congrats: "congrats you've finished grammar section completely" and mark parent as completed also
// NO, FAIL. Shouldn't do it, because, perhaps, all completed tasks it's the good reason to add new, instead of marking
// parent as completed.
