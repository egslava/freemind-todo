'use strict';


const
    Node = require('./src/node'),
    ui = require('./src/ui');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString,
    XmlBuilder = xml2js.Builder;

const mindmap = 'sample-mindmap.mm';

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const leafs = Node.leafs( json['map'] );

        // leafs.forEach( (leaf) => {
        //    console.log(leaf['TEXT'])
        // });

        // console.log(JSON.stringify(json));

        // console.log(leafs.map((it)=>JSON.stringify(it)).join(","));
        // leafs[0]['TEXT'] = "BLAAAAH";

        const xml = new XmlBuilder()
            .buildObject(json);

        // fs.writeFile(mindmap, xml);
        ui.checkTasksPrompt(leafs);

        // console.log(xml);
    });
});
