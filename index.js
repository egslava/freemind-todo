'use strict';


const Node = require('./src/node');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString,
    XmlBuilder = xml2js.Builder;

const mindmap = 'test/maps/with_list_hierachy.mm';

fs.readFile(mindmap, (err, xmlString) => {
    if (err) throw err;

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const leafs = Node.leafs( json['map'] );

        leafs.forEach( (leaf) => {
           console.log(leaf['TEXT'])
        });

        console.log(JSON.stringify(json));
        // leafs[0]['TEXT'] = "BLAAAAH";

        const xml = new XmlBuilder().buildObject(json);

        // fs.writeFile(mindmap, xml);

        console.log(xml);
    });
});
