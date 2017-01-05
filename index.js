#! /usr/bin/env node
'use strict';


const
    Node = require('./src/node'),
    ui = require('./src/ui');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString;

const mindmap = 'sosimple.mm';

const hint = "There're your current tasks. Please, mark them after completion when you're done.";

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const _in = json['map'];
        const nodes = Node.nodeList(_in);
        Node.fixMeta(nodes);

        const leafs = Node.leafs( _in );

        ui.checkTasksPrompt(hint, leafs, _in, ()=>{
            // console.log('1');
            const xml = Node.xmler.buildObject(json);

            Node.clearMeta(nodes);
            fs.writeFile(mindmap, xml, null, (data, err)=>{
                // console.log(err);

            });
        });


        // console.log(xml);
    });
});
