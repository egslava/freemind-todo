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


function isOk(node){ return hasIcon(node, 'button_ok')}
function isStopped(node){ return hasIcon(node, 'stop-sign')}
function isList(node) { return hasIcon(node, 'list') }

// function getFirstFromList(node) {
//
//     let result = [];
//
//     if (isStopped(node)) return [];
//
//     if (node.hasOwnProperty('node')) {
//         node['node'].forEach(sub_node => {
//             if (result.length == 0){
//                 return;
//             }
//             const leafs = module.exports.leafs(sub_node);
//             if (leafs.length != 0){
//                 result = result.concat(leafs)
//             }
//         });
//     } else {
//         result.push(node['$'])
//     }
//
//     switch (result.length) {
//         case  0:
//             result.push(node['$']);
//             break;
//         case 1:
//             return result;
//         default:
//             return [result[0]]
//     }
// }

function leafs(node){
    let result = [];

    if ( isStopped(node) ) return [];
    if ( isOk(node) ) return [];

    // if ( isList(node) ){
    //     return getFirstFromList(node)
    // }

    if (node.hasOwnProperty('node')){
        node['node'].forEach( sub_node => {
            if (isList(node) && result.length > 0) return; // continue...
            result = result.concat(leafs(sub_node))
        } );
    }

    if (result.length == 0) {
        result.push(node['$'])
    }

    return result;
}

module.exports.leafs = leafs;
