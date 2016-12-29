'use strict';
/**
 * Created by egslava on 28/12/2016.
 */

let data = require('./ui.test_data'),
    ui = require('../src/ui');

let expect = require('chai').expect;

describe("CLI-related", () =>{
    it("marks chosen tasks in JSON ('ok' icon is always first)", () =>{
        const mm = data.test_mark_ok1_mindmap['map'];
        ui.mark_ok(mm, data.test_mark_ok1_userinput);
        expect(data.test_mark_ok1_mindmap).to.deep.equal(data.test_mark_ok1_mindmap_out)
    });
});
