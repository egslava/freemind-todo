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

function isRoot(node){
    return node.hasOwnProperty('$') && node['$'].hasOwnProperty('version')
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
        && node['$'].hasOwnProperty('ID')
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

    if (isRoot(node)){
        if (path.length > 1) path = path.slice(0, path.length - 1);
        return path.reverse();
    } else {
        return path.concat(node);
    }
}

function showPath(path){
    return path.map( it => it['$']['TEXT'] ).join(" -> ")
}

function strPath(node, id){ return showPath(getPath(node, id)); }

/** Finds node by its ID. This function doesn't take into account stops/oks/lists/so forth. */
function nodeById(node, id){
    const path = getPath(node, id);
    if (path.length > 0){
        return path[path.length-1];
    } else return null;
}

function nodeList(node){
    let result = [];

    if (!isRoot(node)){
        result.push(node);
    }

    if (node.hasOwnProperty('node')){
        node['node'].forEach( sub_node => {
            result = result.concat(nodeList(sub_node))
        });
    }

    return result;
}

const META = '_meta';

function _ensureMetaField(node){
    if(!node.hasOwnProperty(META)){
        node[META] = []
    }
}

function fixMeta(nodeList) {
    nodeList.forEach(node =>{
        _ensureMetaField(node);

        if (!node.hasOwnProperty('$')) {
            node['$'] = {};
            node[META].push('$')
        }

        if (!node['$'].hasOwnProperty('ID')) {
            node[META].push('$.ID');
            node['$']['ID'] = Math.random() * 100
        }
    })
}

function clearMeta(nodeList){
    nodeList.forEach(node => {
        if (node[META].indexOf('$.ID') !== -1){
            delete node['$']['ID']
        }

        delete node[META];
    })
}

/**
 * Sometime FreeMind doesn't add an 'ID' field to its nodes.
 * So I add this field manually and, when the app finishes I remove all
 * 'META' fields. So the original mindmaps is almost unchanged
 * @param root - mindmap['map']
 * @param callback - callback where you have fixed mindmap for comfortable work
 * @return original mindmap with your changes.
 */
function freemindFix(root, callback){
    const nodes = nodeList(root);
    fixMeta(nodes);
    callback(root);
    clearMeta(nodes);
    return root;
}

module.exports.getPath = getPath;
module.exports.leafs = leafs;
module.exports.nodeById = nodeById;
module.exports.xmler = new XmlBuilder({ 'headless': true });    // `new` FreeMind format :-)
module.exports.showPath = showPath;
module.exports.strPath = strPath;
module.exports.nodeList = nodeList;
module.exports.fixMeta = fixMeta;
module.exports.clearMeta = clearMeta;
module.exports.freemindFix = freemindFix;
