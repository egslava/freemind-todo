'use strict';

/**
 * Created by egslava on 28/12/2016.
 */


module.exports.test_mark_ok1_mindmap = {
    "map": {
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
                    }
                }, {
                    "$": {
                        "CREATED": "1482820673693",
                        "ID": "ID_1532930210",
                        "MODIFIED": "1482820674855",
                        "TEXT": "two"
                    }
                }, {
                    "$": {
                        "CREATED": "1482820675096",
                        "ID": "ID_662031669",
                        "MODIFIED": "1482820676185",
                        "TEXT": "three"
                    }
                }]
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
                }]
            }]
        }]
    }
};

module.exports.test_mark_ok1_userinput = {
    "tasks": [
        "ID_1532930210",    // standard case. User just marked leaf
        "ID_606715181", // unreal situation. User marked 'stopped'-branch. But anyway, it's just a multi-icon test
    ]
};

module.exports.test_mark_ok1_mindmap_out = {
    "map": {
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
                    }
                }, {
                    "$": {
                        "CREATED": "1482820673693",
                        "ID": "ID_1532930210",
                        "MODIFIED": "1482820674855",
                        "TEXT": "two"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "button_ok"
                        }
                    }]
                }, {
                    "$": {
                        "CREATED": "1482820675096",
                        "ID": "ID_662031669",
                        "MODIFIED": "1482820676185",
                        "TEXT": "three"
                    }
                }]
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
                        "BUILTIN": "button_ok"
                    }
                }, {
                    "$": {
                        "BUILTIN": "stop-sign"
                    }
                }]
            }]
        }]
    }
};

module.exports.test_remove_common_prefixes_in = `
            daily -> Full-Stack -> Tools -> WebPack -> Introduction
            daily -> Full-Stack -> Tools -> SystemJS -> Package Management (https://www.youtube.com/watch?v=szJjsduHBQQ)
            daily -> English -> Listenings -> https://www.englishclub.com/listening/dictation.htm
            daily -> English -> Pronunciation -> engfluent.com > English-pronunciation-exercises-main-sounds
            daily -> English -> Grammar -> other/another
            daily -> English -> Reading -> Soft Skills (50+)
            daily -> Full-Stack -> Native Script -> Tutorial -> Install
            daily -> Full-Stack -> Angular.io -> 3. Overview of Architecture
            daily -> Full-Stack -> Express -> Advanced -> Routing
            daily -> Full-Stack -> Testing -> http://pioneerjs.com/
            daily -> Full-Stack -> Testing -> Integration Tests
            daily -> Full-Stack -> Cucumber
            daily -> Full-Stack -> Tools -> gremlins.js
            daily -> Full-Stack -> ReactJS -> docs -> quickstart -> Introducing JSX
            ideas -> ambal -> clone to excel
            ideas -> freemind-todo -> show no more than N in one subcategory
        `.trim().replace(/^\s*/gm, "").split("\n");

module.exports.test_remove_common_prefixes_out = [
    "daily -> English -> Grammar -> other/another",
    "------------------- Listenings -> https://www.englishclub.com/listening/dictation.htm",
    "------------------- Pronunciation -> engfluent.com > English-pronunciation-exercises-main-sounds",
    "------------------- Reading -> Soft Skills (50+)",
    "-------- Full-Stack -> Angular.io -> 3. Overview of Architecture",
    "---------------------- Cucumber",
    "---------------------- Express -> Advanced -> Routing",
    "---------------------- Native Script -> Tutorial -> Install",
    "---------------------- ReactJS -> docs -> quickstart -> Introducing JSX",
    "---------------------- Testing -> Integration Tests",
    "--------------------------------- http://pioneerjs.com/",
    "---------------------- Tools -> SystemJS -> Package Management (https://www.youtube.com/watch?v=szJjsduHBQQ)",
    "------------------------------- WebPack -> Introduction",
    "------------------------------- gremlins.js",
    "ideas -> ambal -> clone to excel",
    "-------- freemind-todo -> show no more than N in one subcategory"
];
