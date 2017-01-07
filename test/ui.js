'use strict';
/**
 * Created by egslava on 28/12/2016.
 */

const path = require('path');

let data = require('./ui.test_data'),
    ui = require('../src/ui');

let expect = require('chai').expect;

describe("CLI-related", function () {
    it("reads config", function(){
        ui._getPackageJson();
        // no expectations - just should finish without any exceptions
    });

    it("marks chosen tasks in JSON ('ok' icon is always first)", function () {
        const mm = data.test_mark_ok1_mindmap['map'];
        ui.mark_ok(mm, data.test_mark_ok1_userinput);
        expect(data.test_mark_ok1_mindmap).to.deep.equal(data.test_mark_ok1_mindmap_out)
    });

    it("removes all common beginnings", function () {
        const   _in = data.test_remove_common_prefixes_in,
                out = data.test_remove_common_prefixes_out;

        expect(out).to.deep.equal( ui.removeCommonPrefixes(_in, "-") )
    });

    it("shows hierachy data fine", function () {
        const _in_tasks = [{
            "CREATED": "1482820670156",
            "ID": "ID_564200090",
            "MODIFIED": "1482820673355",
            "TEXT": "one"
        }, {
            "CREATED": "1482820673693",
            "ID": "ID_1532930210",
            "MODIFIED": "1482820674855",
            "TEXT": "two"
        }];

        const _tree =  {
            "$": {
                "version": "1.1.0"
            },
            "node": [{
                "$": {
                    "CREATED": "1482820651650",
                    "ID": "ID_395714193",
                    "MODIFIED": "1482820662638",
                    "TEXT": "so simple"
                },
                "node": [{
                    "$": {
                        "CREATED": "1482820663374",
                        "ID": "ID_1314005069",
                        "MODIFIED": "1482820666799",
                        "POSITION": "right",
                        "TEXT": "first"
                    },
                    "node": [{
                        "$": {
                            "CREATED": "1482820670156",
                            "ID": "ID_564200090",
                            "MODIFIED": "1482820673355",
                            "TEXT": "one"
                        },
                    }, {
                        "$": {
                            "CREATED": "1482820673693",
                            "ID": "ID_1532930210",
                            "MODIFIED": "1482820674855",
                            "TEXT": "two"
                        },
                    }, {
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
                        }],
                    }],
                }, {
                    "$": {
                        "CREATED": "1482820667696",
                        "ID": "ID_606715181",
                        "MODIFIED": "1482836165514",
                        "POSITION": "right",
                        "TEXT": "second"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "stop-sign"
                        }
                    }],
                    "node": [{
                        "$": {
                            "CREATED": "1482853951386",
                            "ID": "ID_1009363453",
                            "MODIFIED": "1482853959274",
                            "TEXT": "four"
                        },
                    }, {
                        "$": {
                            "CREATED": "1482853970227",
                            "ID": "ID_1850032666",
                            "MODIFIED": "1482853971624",
                            "TEXT": "five"
                        },
                    }, {
                        "$": {
                            "CREATED": "1482853972319",
                            "ID": "ID_1161558285",
                            "MODIFIED": "1482853973019",
                            "TEXT": "six"
                        },
                    }],
                }],
            }]
        }

        const out = [
            {name:"first -> one", value: "ID_564200090"},
            {name:"–––––––– two", value: "ID_1532930210"}
        ];

        expect(ui.getHierachyLabels(_in_tasks, _tree, "–")).to.deep.equals(out);

    });
});
