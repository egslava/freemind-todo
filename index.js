#! /usr/bin/env node
'use strict';


const
    Node = require('./src/node'),
    ui = require('./src/ui'),
    Commander = require('commander');

const
    fs = require('fs'),
    xml2js = require('xml2js'),
    parseXml = xml2js.parseString;

const hint = "There're your current tasks. Please, mark them after completion when you're done.";

const DEFAULT_MINDMAP_FILE = "todo.mm";

Commander
    .version(ui.package_json.version)
    .option('-r, --rows [number]', "terminal height in rows. Default - current terminal size", process.stdout.rows - 4)
    .option('-m, --mindmap [string]', "path to the FreeMind mindmap", DEFAULT_MINDMAP_FILE)
    .parse(process.argv);

fs.readFile(Commander.mindmap, (err, xmlString) => {
    if (err) {
        console.log("Can not open or find/open the file: " + Commander.mindmap);
        console.log("Please, specify the path to your mind map via "
            + "`" + ui.BIN_NAME + " -m filename.mm`");
        console.log("or just place your file `" + DEFAULT_MINDMAP_FILE + "` to the current directory");
        console.log(err.message);
        process.exit(-1);
    }

    parseXml(xmlString, (err, json) => {
        if (err){ throw err}

        const _in = json['map'];
        const nodes = Node.nodeList(_in);
        Node.fixMeta(nodes);

        const leafs = Node.leafs( _in );

        ui.checkTasksPrompt(hint, leafs, _in, Commander.rows, ()=>{
            // console.log('1');
            const xml = Node.xmler.buildObject(json);

            Node.clearMeta(nodes);
            fs.writeFile(mindmap, xml, null, (data, err)=>{
                if (err) console.log(err);
            });
        });


        // console.log(xml);
    });
});
