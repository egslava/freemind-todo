/**
 * Created by egslava on 27/12/2016.
 */

/** 1,2,3 mind map */
module.exports.simple_in = {
    "map": {
        "$": {"version": "1.1.0"},
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
                    "MODIFIED": "1482820669239",
                    "POSITION": "right",
                    "TEXT": "second"
                }
            }]
        }]
    }
};

module.exports.simple_find_by_id_id = "ID_1532930210";
module.exports.simple_find_by_id_out = {
    "$": {
        "CREATED": "1482820673693",
        "ID": "ID_1532930210",
        "MODIFIED": "1482820674855",
        "TEXT": "two"
    }
};

module.exports.simple_some_tasks = [
    { "CREATED": "1482820651650", "ID": "ID_395714193", "MODIFIED": "1482820662638", "TEXT": "so simple"},
    { "CREATED": "1482820663374", "ID": "ID_1314005069","MODIFIED": "1482820666799", "POSITION": "right", "TEXT": "first"},
    { "CREATED": "1482820670156", "ID": "ID_564200090", "MODIFIED": "1482820673355", "TEXT": "one" },
];

module.exports.simple_some_tasks_paths = [
    "so simple",    // for the root element it should contain its name
    "first",        // but other elements shouldn't duplicate the root again and again
    "first -> one"
];

module.exports.simple_leaves = [{
    "CREATED": "1482820670156",
    "ID": "ID_564200090",
    "MODIFIED": "1482820673355",
    "TEXT": "one"
}, {
    "CREATED": "1482820673693",
    "ID": "ID_1532930210",
    "MODIFIED": "1482820674855",
    "TEXT": "two"
}, {
    "CREATED": "1482820675096",
    "ID": "ID_662031669",
    "MODIFIED": "1482820676185",
    "TEXT": "three"
}, {
    "CREATED": "1482820667696",
    "ID": "ID_606715181",
    "MODIFIED": "1482820669239",
    "POSITION": "right",
    "TEXT": "second"
}];

module.exports.empty_mm_in = {
    "map": {
        "$": {"version": "1.1.0"},
        "node": [{
            "$": {
                "CREATED": "1482835584403",
                "ID": "ID_1709426041",
                "MODIFIED": "1482835584403",
                "TEXT": "New Mindmap"
            }
        }]
    }
};

module.exports.empty_mm_leaves = [{
    "CREATED": "1482835584403",
    "ID": "ID_1709426041",
    "MODIFIED": "1482835584403",
    "TEXT": "New Mindmap"
}];

module.exports.with_stops_in = {
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
                        "MODIFIED": "1482853982193",
                        "TEXT": "three"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "stop-sign"
                        }
                    }]
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
                }],
                "node": [{
                    "$": {
                        "CREATED": "1482853951386",
                        "ID": "ID_1009363453",
                        "MODIFIED": "1482853959274",
                        "TEXT": "four"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853970227",
                        "ID": "ID_1850032666",
                        "MODIFIED": "1482853971624",
                        "TEXT": "five"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853972319",
                        "ID": "ID_1161558285",
                        "MODIFIED": "1482853973019",
                        "TEXT": "six"
                    }
                }]
            }]
        }]
    }
};

module.exports.with_stops_out = [{
    "CREATED": "1482820670156",
    "ID": "ID_564200090",
    "MODIFIED": "1482820673355",
    "TEXT": "one"
},{
    "CREATED": "1482820673693",
    "ID": "ID_1532930210",
    "MODIFIED": "1482820674855",
    "TEXT": "two"
}];


module.exports.with_lists_in = {
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
                    "MODIFIED": "1482854581208",
                    "POSITION": "right",
                    "TEXT": "first"
                },
                "icon": [{
                    "$": {
                        "BUILTIN": "list"
                    }
                }],
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
                        "MODIFIED": "1482853982193",
                        "TEXT": "three"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "stop-sign"
                        }
                    }]
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
                }],
                "node": [{
                    "$": {
                        "CREATED": "1482853951386",
                        "ID": "ID_1009363453",
                        "MODIFIED": "1482853959274",
                        "TEXT": "four"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853970227",
                        "ID": "ID_1850032666",
                        "MODIFIED": "1482853971624",
                        "TEXT": "five"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853972319",
                        "ID": "ID_1161558285",
                        "MODIFIED": "1482853973019",
                        "TEXT": "six"
                    }
                }]
            }, {
                "$": {
                    "CREATED": "1482854601858",
                    "ID": "ID_1428302851",
                    "MODIFIED": "1482854604763",
                    "POSITION": "left",
                    "TEXT": "third"
                }
            }]
        }]
    }
};

module.exports.with_lists_out = [{
    "CREATED": "1482820670156",
    "ID": "ID_564200090",
    "MODIFIED": "1482820673355",
    "TEXT": "one"
}, {
    "CREATED": "1482854601858",
    "ID": "ID_1428302851",
    "MODIFIED": "1482854604763",
    "POSITION": "left",
    "TEXT": "third"
}];

module.exports.with_list_hierachy_in = {
    "map": {
        "$": {
            "version": "1.1.0"
        },
        "node": [{
            "$": {
                "CREATED": "1482820651650",
                "ID": "ID_395714193",
                "MODIFIED": "1482855525619",
                "TEXT": "so simple"
            },
            "icon": [{
                "$": {
                    "BUILTIN": "list"
                }
            }],
            "node": [{
                "$": {
                    "CREATED": "1482820663374",
                    "ID": "ID_1314005069",
                    "MODIFIED": "1482854581208",
                    "POSITION": "right",
                    "TEXT": "first"
                },
                "icon": [{
                    "$": {
                        "BUILTIN": "list"
                    }
                }],
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
                        "MODIFIED": "1482853982193",
                        "TEXT": "three"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "stop-sign"
                        }
                    }]
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
                }],
                "node": [{
                    "$": {
                        "CREATED": "1482853951386",
                        "ID": "ID_1009363453",
                        "MODIFIED": "1482853959274",
                        "TEXT": "four"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853970227",
                        "ID": "ID_1850032666",
                        "MODIFIED": "1482853971624",
                        "TEXT": "five"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853972319",
                        "ID": "ID_1161558285",
                        "MODIFIED": "1482853973019",
                        "TEXT": "six"
                    }
                }]
            }, {
                "$": {
                    "CREATED": "1482854601858",
                    "ID": "ID_1428302851",
                    "MODIFIED": "1482854604763",
                    "POSITION": "left",
                    "TEXT": "third"
                }
            }]
        }]
    }
};

module.exports.with_list_hieracy_out1 = [{
    "CREATED": "1482820670156",
    "ID": "ID_564200090",
    "MODIFIED": "1482820673355",
    "TEXT": "one"
}];

module.exports.with_list_hieracy_out2 = [{
    "CREATED": "1482854601858",
    "ID": "ID_1428302851",
    "MODIFIED": "1482854604763",
    "POSITION": "left",
    "TEXT": "third"
}];

module.exports.with_lists_stops_oks_in = {
    "map": {
        "$": {
            "version": "1.1.0"
        },
        "node": [{
            "$": {
                "CREATED": "1482820651650",
                "ID": "ID_395714193",
                "MODIFIED": "1482855525619",
                "TEXT": "so simple"
            },
            "icon": [{
                "$": {
                    "BUILTIN": "list"
                }
            }],
            "node": [{
                "$": {
                    "CREATED": "1482820663374",
                    "ID": "ID_1314005069",
                    "MODIFIED": "1482854581208",
                    "POSITION": "right",
                    "TEXT": "first"
                },
                "icon": [{
                    "$": {
                        "BUILTIN": "list"
                    }
                }],
                "node": [{
                    "$": {
                        "CREATED": "1482820670156",
                        "ID": "ID_564200090",
                        "MODIFIED": "1482859312596",
                        "TEXT": "one"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "button_ok"
                        }
                    }]
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
                        "MODIFIED": "1482853982193",
                        "TEXT": "three"
                    },
                    "icon": [{
                        "$": {
                            "BUILTIN": "stop-sign"
                        }
                    }]
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
                }],
                "node": [{
                    "$": {
                        "CREATED": "1482853951386",
                        "ID": "ID_1009363453",
                        "MODIFIED": "1482853959274",
                        "TEXT": "four"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853970227",
                        "ID": "ID_1850032666",
                        "MODIFIED": "1482853971624",
                        "TEXT": "five"
                    }
                }, {
                    "$": {
                        "CREATED": "1482853972319",
                        "ID": "ID_1161558285",
                        "MODIFIED": "1482853973019",
                        "TEXT": "six"
                    }
                }]
            }, {
                "$": {
                    "CREATED": "1482854601858",
                    "ID": "ID_1428302851",
                    "MODIFIED": "1482854604763",
                    "POSITION": "left",
                    "TEXT": "third"
                }
            }]
        }]
    }
};

module.exports.with_lists_stops_oks_out = [{
    "CREATED": "1482820673693",
    "ID": "ID_1532930210",
    "MODIFIED": "1482820674855",
    "TEXT": "two"
}];

