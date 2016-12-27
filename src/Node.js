'use strict';

/**
 * Created by egslava on 27/12/2016.
 * The idea of this parsing is to NOT create some special data structures, but just use JSON.
 * Why? Because JSON can be easily converted to XML again.
 */

const instanceOf = require('instance-of');


function leafs(json){
    let result = [];

    if (json.hasOwnProperty('node')){

        json['node'].forEach( node => result = result.concat(leafs(node)) );
    } else {
        result.push(json['$'])
    }

    return result;
}

module.exports.leafs = leafs;
