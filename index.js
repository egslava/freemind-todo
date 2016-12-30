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

let xmler = new XmlBuilder({ 'headless': true });    // `new` FreeMind format :-)
module.exports.xmler = xmler;   // for testing

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const leafs = Node.leafs( json['map'] );

        ui.checkTasksPrompt(hint, leafs, json['map'], ()=>{
            // console.log('1');
            const xml = xmler.buildObject(json);
            fs.writeFile(mindmap, xml, null, (data, err)=>{
                // console.log(err);

            });
        });


        // console.log(xml);
    });
});
