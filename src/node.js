'use strict';

/**
 * Created by egslava on 27/12/2016.
 * The idea of this parsing is to NOT create some special data structures, but just use JSON.
 * Why? Because JSON can be easily converted to XML again.
 */

const instanceOf = require('instance-of');

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
        return node['icon'].find( icon => icon['$']['BUILTIN'] == name)
    }

    return false;
}

function isStopped(node){ return hasIcon(node, 'stop-sign')}

function leafs(json){
    let result = [];

    if ( isStopped(json) ) return [];

    if (json.hasOwnProperty('node')){
        json['node'].forEach( node => result = result.concat(leafs(node)) );
    } else {
        result.push(json['$'])
    }

    return result;
}

module.exports.leafs = leafs;
