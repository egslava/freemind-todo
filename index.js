#! /usr/bin/env node
'use strict';


const
    Node = require('./src/node'),
    ui = require('./src/ui');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString;

const mindmap = 'test/maps/issue2.mm';

const hint = "There're your current tasks. Please, mark them after completion when you're done.";

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        Node.freemindFix(json['map'], _in => {
            const leafs = Node.leafs( _in );

            ui.checkTasksPrompt(hint, leafs, _in, ()=>{
                // console.log('1');
                const xml = Node.xmler.buildObject(json);
                fs.writeFile(mindmap, xml, null, (data, err)=>{
                    // console.log(err);

                });
            });
        });


        // console.log(xml);
    });
});
