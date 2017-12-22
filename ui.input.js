Schema.addCategory({
    name: "ui_input",
    text: "UI 输入控件",
    dataAttributes: []
});
Schema.addShape({
    name: "uiButton",
    title: "按钮",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 120,
        h: 30
    },
    anchors: [],
    fillStyle: {
        type: "gradient",
        gradientType: "linear",
        beginColor: "233,233,233",
        endColor: "200,200,200",
        angle: 0
    },
    lineStyle: {
        lineWidth: 0
    },
    fontStyle: {
        size: 14
    },
    textBlock: [{
        position: {
            x: 0,
            y: 0,
            w: "w",
            h: "h"
        },
        text: "按钮"
    }],
    path: [{
        actions: {
            ref: "roundRectangle"
        }
    }],
    drawIcon: function(a, b) {
        var c = -2.5;
        b += 2.5;
        return [{
            fillStyle: {
                type: "solid",
                color: "200,200,200"
            },
            actions: [{
                action: "move",
                x: 0,
                y: c + 3
            }, {
                action: "quadraticCurve",
                x1: 0,
                y1: c,
                x: 3,
                y: c
            }, {
                action: "line",
                x: a - 3,
                y: c
            }, {
                action: "quadraticCurve",
                x1: a,
                y1: c,
                x: a,
                y: c + 3
            }, {
                action: "line",
                x: a,
                y: b - 3
            }, {
                action: "quadraticCurve",
                x1: a,
                y1: b,
                x: a - 3,
                y: b
            }, {
                action: "line",
                x: 3,
                y: b
            }, {
                action: "quadraticCurve",
                x1: 0,
                y1: b,
                x: 0,
                y: b - 3
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiInput",
    title: "输入框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 25
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }],
    drawIcon: function(a, b) {
        var c = -2.5;
        b += 2.5;
        return [{
            actions: [{
                action: "move",
                x: 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: b
            }, {
                action: "line",
                x: 0.5,
                y: b
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiSelect",
    title: "下拉选择框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 25
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "solid",
            color: "200,200,200"
        },
        actions: [{
            action: "move",
            x: "w-h",
            y: 1
        }, {
            action: "line",
            x: "w-1",
            y: 1
        }, {
            action: "line",
            x: "w-1",
            y: "h-1"
        }, {
            action: "line",
            x: "w-h",
            y: "h-1"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        actions: [{
            action: "move",
            x: "Math.round(w-h)-0.5",
            y: 1
        }, {
            action: "line",
            x: "Math.round(w-h)-0.5",
            y: "h"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "solid",
            color: "80,80,80"
        },
        actions: [{
            action: "move",
            x: "w-h*0.5",
            y: "h*0.6"
        }, {
            action: "line",
            x: "w-h*0.7",
            y: "h*0.4"
        }, {
            action: "line",
            x: "w-h*0.3",
            y: "h*0.4"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "none"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var a = -4;
        b += 4;
        var d = -10;
        c += 8;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/select.png",
                imageW: 28,
                imageH: 10,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiSearch",
    title: "搜索框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 25
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    textBlock: [{
        position: {
            x: 25,
            y: 0,
            w: "w-35",
            h: "h"
        },
        text: ""
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "image",
            fileId: "/assets/images/designer/ui_input/search.png",
            imageX: "4",
            imageY: "h/2-9",
            imageW: 16,
            imageH: 16,
            display: "static"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var a = -4;
        b += 4;
        var d = -10;
        c += 8;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/search.png",
                imageW: 28,
                imageH: 10,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiCheckbox",
    title: "复选框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 120,
        h: 20
    },
    lineStyle: {
        lineWidth: 2,
        lineColor: "92,92,92",
        lineStyle: "solid"
    },
    fontStyle: {
        textAlign: "left",
        size: 14
    },
    anchors: [],
    resizeDir: ["l", "r"],
    textBlock: [{
        position: {
            x: "20",
            y: "0",
            w: "w-20",
            h: "h"
        },
        text: "选项"
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0,
            y: 3
        }, {
            action: "line",
            x: "h-6",
            y: 3
        }, {
            action: "line",
            x: "h-6",
            y: "h-3"
        }, {
            action: "line",
            x: 0,
            y: "h-3"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "none"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(a, b) {
        return [{
            actions: [{
                action: "move",
                x: a / 2 - 5,
                y: b / 2 - 5
            }, {
                action: "line",
                x: a / 2 + 5,
                y: b / 2 - 5
            }, {
                action: "line",
                x: a / 2 + 5,
                y: b / 2 + 5
            }, {
                action: "line",
                x: a / 2 - 5,
                y: b / 2 + 5
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiCheckedbox",
    title: "复选框（选中）",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 120,
        h: 20
    },
    lineStyle: {
        lineWidth: 2,
        lineColor: "92,92,92",
        lineStyle: "solid"
    },
    fontStyle: {
        textAlign: "left",
        size: 14
    },
    anchors: [],
    resizeDir: ["l", "r"],
    textBlock: [{
        position: {
            x: "20",
            y: "0",
            w: "w-20",
            h: "h"
        },
        text: "选项"
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0,
            y: 3
        }, {
            action: "line",
            x: "h-6",
            y: 3
        }, {
            action: "line",
            x: "h-6",
            y: "h-3"
        }, {
            action: "line",
            x: 0,
            y: "h-3"
        }, {
            action: "close"
        }]
    }, {
        actions: [{
            action: "move",
            x: 3,
            y: "h/2"
        }, {
            action: "line",
            x: 6,
            y: "h*0.7"
        }, {
            action: "line",
            x: 10,
            y: "h*0.3"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "none"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(a, b) {
        return [{
            actions: [{
                action: "move",
                x: a / 2 - 5,
                y: b / 2 - 5
            }, {
                action: "line",
                x: a / 2 + 5,
                y: b / 2 - 5
            }, {
                action: "line",
                x: a / 2 + 5,
                y: b / 2 + 5
            }, {
                action: "line",
                x: a / 2 - 5,
                y: b / 2 + 5
            }, {
                action: "close"
            }]
        }, {
            actions: [{
                action: "move",
                x: a / 2 - 3,
                y: b / 2
            }, {
                action: "line",
                x: a / 2,
                y: b / 2 + 2
            }, {
                action: "line",
                x: a / 2 + 3,
                y: b / 2 - 2.5
            }]
        }]
    }
});
Schema.addShape({
    name: "uiRadio",
    title: "单选框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 120,
        h: 20
    },
    lineStyle: {
        lineWidth: 2,
        lineColor: "92,92,92",
        lineStyle: "solid"
    },
    fontStyle: {
        textAlign: "left",
        size: 14
    },
    anchors: [],
    resizeDir: ["l", "r"],
    textBlock: [{
        position: {
            x: "20",
            y: "0",
            w: "w-20",
            h: "h"
        },
        text: "选项"
    }],
    path: [{
        actions: [{
            action: "move",
            x: "0",
            y: "h/2"
        }, {
            action: "curve",
            x1: "0",
            y1: "0.4",
            x2: "h-6",
            y2: "0.4",
            x: "h-6",
            y: "h/2"
        }, {
            action: "curve",
            x1: "h-6",
            y1: "h-0.4",
            x2: "0",
            y2: "h-0.4",
            x: "0",
            y: "h/2"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "none"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(a, b) {
        return [{
            actions: [{
                action: "move",
                x: a / 2 - 5,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 - 5,
                y1: b / 2 - 6.8,
                x2: a / 2 + 5,
                y2: b / 2 - 6.8,
                x: a / 2 + 5,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 + 5,
                y1: b / 2 + 6.8,
                x2: a / 2 - 5,
                y2: b / 2 + 6.8,
                x: a / 2 - 5,
                y: b / 2
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiRadioChecked",
    title: "单选框（选中）",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 120,
        h: 20
    },
    lineStyle: {
        lineWidth: 2,
        lineColor: "92,92,92",
        lineStyle: "solid"
    },
    fontStyle: {
        textAlign: "left",
        size: 14
    },
    anchors: [],
    resizeDir: ["l", "r"],
    textBlock: [{
        position: {
            x: "20",
            y: "0",
            w: "w-20",
            h: "h"
        },
        text: "选项"
    }],
    path: [{
        actions: [{
            action: "move",
            x: "0",
            y: "h/2"
        }, {
            action: "curve",
            x1: "0",
            y1: "0.4",
            x2: "h-6",
            y2: "0.4",
            x: "h-6",
            y: "h/2"
        }, {
            action: "curve",
            x1: "h-6",
            y1: "h-0.4",
            x2: "0",
            y2: "h-0.4",
            x: "0",
            y: "h/2"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "solid",
            color: "92,92,92"
        },
        actions: [{
            action: "move",
            x: "3",
            y: "h/2"
        }, {
            action: "curve",
            x1: "3",
            y1: "4.5",
            x2: "h-9",
            y2: "4.5",
            x: "h-9",
            y: "h/2"
        }, {
            action: "curve",
            x1: "h-9",
            y1: "h-4.5",
            x2: "3",
            y2: "h-4.5",
            x: "3",
            y: "h/2"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "none"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(a, b) {
        return [{
            actions: [{
                action: "move",
                x: a / 2 - 5,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 - 5,
                y1: b / 2 - 6.8,
                x2: a / 2 + 5,
                y2: b / 2 - 6.8,
                x: a / 2 + 5,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 + 5,
                y1: b / 2 + 6.8,
                x2: a / 2 - 5,
                y2: b / 2 + 6.8,
                x: a / 2 - 5,
                y: b / 2
            }, {
                action: "close"
            }]
        }, {
            lineStyle: {
                lineWidth: 0
            },
            fillStyle: {
                type: "solid",
                color: "92,92,92"
            },
            actions: [{
                action: "move",
                x: a / 2 - 3,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 - 3,
                y1: b / 2 - 4.2,
                x2: a / 2 + 3,
                y2: b / 2 - 4.2,
                x: a / 2 + 3,
                y: b / 2
            }, {
                action: "curve",
                x1: a / 2 + 3,
                y1: b / 2 + 4.2,
                x2: a / 2 - 3,
                y2: b / 2 + 4.2,
                x: a / 2 - 3,
                y: b / 2
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiStepper",
    title: "Stepper 数字输入",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 60,
        h: 25
    },
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    textBlock: [{
        position: {
            x: "5",
            y: "0",
            w: "w-21",
            h: "h"
        },
        text: "0"
    }],
    anchors: [],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "solid",
            color: "80,80,80"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: [{
            action: "move",
            x: "w-8",
            y: "h*0.25-2"
        }, {
            action: "line",
            x: "w-12",
            y: "h*0.25+3"
        }, {
            action: "line",
            x: "w-4",
            y: "h*0.25+3"
        }, {
            action: "close"
        }]
    }, {
        actions: [{
            action: "move",
            x: "Math.round(w-16)+0.5",
            y: "0"
        }, {
            action: "line",
            x: "Math.round(w-16)+0.5",
            y: "h"
        }, {
            action: "move",
            x: "w-16",
            y: "Math.round(h/2)-0.5"
        }, {
            action: "line",
            x: "w",
            y: "Math.round(h/2)-0.5"
        }]
    }, {
        fillStyle: {
            type: "solid",
            color: "80,80,80"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: [{
            action: "move",
            x: "w-8",
            y: "h*0.75+2"
        }, {
            action: "line",
            x: "w-12",
            y: "h*0.75-3"
        }, {
            action: "line",
            x: "w-4",
            y: "h*0.75-3"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var a = -4;
        b += 4;
        var d = -10;
        c += 8;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/stepper.png",
                imageW: 30,
                imageH: 16,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiTextarea",
    title: "文本域",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 180,
        h: 70
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left",
        vAlign: "top"
    },
    textBlock: [{
        position: {
            x: 10,
            y: 5,
            w: "w-20",
            h: "h-10"
        }
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }],
    drawIcon: function(a, b) {
        var c = -2.5;
        b += 2.5;
        return [{
            actions: [{
                action: "move",
                x: 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: b
            }, {
                action: "line",
                x: 0.5,
                y: b
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiMultiselect",
    title: "多选列表",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 70
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left",
        vAlign: "top"
    },
    textBlock: [{
        position: {
            x: 10,
            y: 5,
            w: "w-20",
            h: "h-10"
        }
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "solid",
            color: "229,229,229"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: [{
            action: "move",
            x: "w-8",
            y: 1
        }, {
            action: "line",
            x: "Math.round(w)-1",
            y: 1
        }, {
            action: "line",
            x: "Math.round(w)-1",
            y: "h-1"
        }, {
            action: "line",
            x: "w-8",
            y: "h-1"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 1,
            lineColor: "200,200,200"
        },
        fillStyle: {
            type: "none"
        },
        actions: [{
            action: "move",
            x: "Math.round(w-8)-0.5",
            y: 1
        }, {
            action: "line",
            x: "Math.round(w-8)-0.5",
            y: "h-1"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(a, b) {
        var c = -1.5;
        b += 1.5;
        return [{
            actions: [{
                action: "move",
                x: 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: c
            }, {
                action: "line",
                x: Math.round(a) - 0.5,
                y: b
            }, {
                action: "line",
                x: 0.5,
                y: b
            }, {
                action: "close"
            }]
        }, {
            fillStyle: {
                type: "solid",
                color: "212,212,212"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a - 6,
                y: c + 0.5
            }, {
                action: "line",
                x: Math.round(a) - 1,
                y: c + 0.5
            }, {
                action: "line",
                x: Math.round(a) - 1,
                y: b - 0.5
            }, {
                action: "line",
                x: a - 6,
                y: b - 0.5
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiDatepicker",
    title: "日期选择框",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 25
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    fontStyle: {
        size: 14,
        textAlign: "left"
    },
    textBlock: [{
        position: {
            x: 10,
            y: 0,
            w: "w-35",
            h: "h"
        }
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        actions: [{
            action: "move",
            x: "Math.round(w-h)-0.5",
            y: 1
        }, {
            action: "line",
            x: "Math.round(w-h)-0.5",
            y: "h"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "image",
            fileId: "/assets/images/designer/ui_input/calendar.png",
            imageX: "w-21",
            imageY: "h/2-8",
            imageW: 16,
            imageH: 16,
            display: "static"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var a = -4;
        b += 4;
        var d = -10;
        c += 8;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/calendar.png",
                imageW: 30,
                imageH: 16,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiSlider",
    title: "Slider 范围选择",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 160,
        h: 20
    },
    anchors: [],
    textBlock: [],
    resizeDir: ["l", "r"],
    path: [{
        fillStyle: {
            type: "none"
        },
        lineStyle: {
            lineWidth: 4,
            lineColor: "203,203,203"
        },
        actions: [{
            action: "move",
            x: 0,
            y: "h/2"
        }, {
            action: "line",
            x: "w",
            y: "h/2"
        }]
    }, {
        fillStyle: {
            type: "solid",
            color: "255,255,255"
        },
        lineStyle: {
            lineWidth: 2,
            lineColor: "203,203,203"
        },
        actions: [{
            action: "move",
            x: "w*0.4",
            y: "h/2"
        }, {
            action: "curve",
            x1: "w*0.4",
            y1: "h/2-8",
            x2: "w*0.4+12",
            y2: "h/2-8",
            x: "w*0.4+12",
            y: "h/2"
        }, {
            action: "curve",
            x1: "w*0.4+12",
            y1: "h/2+8",
            x2: "w*0.4",
            y2: "h/2+8",
            x: "w*0.4",
            y: "h/2"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var d = -8;
        c += 8;
        var a = -2;
        b += 2;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/slider.png",
                imageW: 30,
                imageH: 15,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});
Schema.addShape({
    name: "uiTextEditor",
    title: "文本编辑器",
    category: "ui_input",
    attribute: {
        linkable: false
    },
    props: {
        w: 300,
        h: 180
    },
    anchors: [],
    lineStyle: {
        lineWidth: 1,
        lineColor: "138,138,138"
    },
    fontStyle: {
        size: 14,
        textAlign: "left",
        vAlign: "top"
    },
    textBlock: [{
        position: {
            x: 10,
            y: 30,
            w: "w-20",
            h: "h-35"
        }
    }],
    path: [{
        actions: [{
            action: "move",
            x: 0.5,
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: 0.5
        }, {
            action: "line",
            x: "Math.round(w)-0.5",
            y: "Math.round(h)-0.5"
        }, {
            action: "line",
            x: 0.5,
            y: "Math.round(h)-0.5"
        }, {
            action: "close"
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        actions: [{
            action: "move",
            x: "0.5",
            y: 25.5
        }, {
            action: "line",
            x: "w",
            y: 25.5
        }]
    }, {
        fillStyle: {
            type: "none"
        },
        lineStyle: {
            lineWidth: 0
        },
        actions: [{
            action: "move",
            x: 1,
            y: 1
        }, {
            action: "line",
            x: "w-1",
            y: 1
        }, {
            action: "line",
            x: "w-1",
            y: "h-1"
        }, {
            action: "line",
            x: "1",
            y: "h-1"
        }, {
            action: "close"
        }]
    }, {
        lineStyle: {
            lineWidth: 0
        },
        fillStyle: {
            type: "image",
            fileId: "/assets/images/designer/ui_input/richtext.png",
            imageX: 5,
            imageY: 5,
            imageW: 260,
            imageH: 20,
            display: "static"
        },
        actions: {
            ref: "rectangle"
        }
    }],
    drawIcon: function(b, c) {
        var a = -4;
        b += 4;
        var d = -10;
        c += 8;
        return [{
            fillStyle: {
                type: "image",
                fileId: "/assets/images/designer/ui_input/thumb/richtext.png",
                imageW: 23,
                imageH: 23,
                display: "original"
            },
            lineStyle: {
                lineWidth: 0
            },
            actions: [{
                action: "move",
                x: a,
                y: d
            }, {
                action: "line",
                x: b,
                y: d
            }, {
                action: "line",
                x: b,
                y: c
            }, {
                action: "line",
                x: a,
                y: c
            }, {
                action: "close"
            }]
        }]
    }
});