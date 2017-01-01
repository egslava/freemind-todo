'use strict';

/**
 * Created by egslava on 27/12/2016.
 * The idea of this parsing is to NOT create some special data structures, but just use JSON.
 * Why? Because JSON can be easily converted to XML again.
 */

const instanceOf = require('instance-of'),
    XmlBuilder = require('xml2js').Builder;


/*
{
    "$": {
        "CREATED": "1482820675096",
        "ID": "ID_662031669",
        "MODIFIED": "1482853982193",
        "TEXT": "three"
    },
    "icon": [{
        "$": {
            "BUILTIN": "stop-sign"
        }
    }]
}
 */

function hasIcon(node, name){
    if (node.hasOwnProperty('icon')){
        return node['icon'].find( icon => icon['$']['BUILTIN'] === name)
    }

    return false;
}


function isOk(node){ return hasIcon(node, 'button_ok')}
function isStopped(node){ return hasIcon(node, 'stop-sign')}
function isList(node) { return hasIcon(node, 'list') }

function leafs(node){
    let result = [];

    if ( isStopped(node) ) return [];
    if ( isOk(node) ) return [];

    if (node.hasOwnProperty('node')){
        node['node'].forEach( sub_node => {
            if (isList(node) && result.length > 0) return; // continue...
            result = result.concat(leafs(sub_node))
        } );
    }

    if (result.length === 0) {
        result.push(node['$'])
    }

    return result;
}

/** It just looks for @param node in @param tree */
function getPath(node, id){
    if (
        node.hasOwnProperty('$')
        && node['$'].hasOwnProperty('ID') // for the root node.
        && node['$']['ID'] === id) return [node];


    let path = [];

    if (node.hasOwnProperty('node')){
        node['node'].some( sub_node => {
            if (path.length !== 0) return true;   // break
            path = getPath(sub_node, id);
        } );
    }

    // use some to break this cycle

    if (path.length === 0) return [];  // if nothing is found, just null

    if (node.hasOwnProperty('$') && node['$'].hasOwnProperty('ID')){
        return path.concat(node);
    } else {
        // root node.
        if (path.length > 1) path = path.slice(0, path.length - 1);
        return path.reverse();
    }
}

/** Finds node by its ID. This function doesn't take into account stops/oks/lists/so forth. */
function nodeById(node, id){
    const path = getPath(node, id);
    if (path.length > 0){
        return path[path.length-1];
    } else return null;
}

module.exports.getPath = getPath;
module.exports.leafs = leafs;
module.exports.nodeById = nodeById;
module.exports.xmler = new XmlBuilder({ 'headless': true });    // `new` FreeMind format :-)
