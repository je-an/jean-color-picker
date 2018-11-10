({
    baseUrl: '.',
    out: 'dist/jean-color-picker.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/ColorPicker"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.ColorPicker = root.ColorPicker || {}; \n" +
        "\t \troot.ColorPicker = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/ColorPicker'); \n" +
        "}));"
    },
     paths:{
        "text": "node_modules/text/text",
        "css": "node_modules/require-css/css",
        "css-builder": "node_modules/require-css/css-builder",
        "normalize": "node_modules/require-css/normalize",
        DomElement: "node_modules/jean-dom-element/src/DomElement",
        DomUtil: "node_modules/jean-dom-util/src/DomUtil",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure",
        Inheritance: "node_modules/jean-inheritance/src/Inheritance",
        Merge: "node_modules/jean-merge/src/Merge",
        "color-picker-html": "src/html/color-picker.html",
        "color-picker-css": "src/css/color-picker"
    },
    stubModules: ["css", "text", "normalize", "css-builder"]
})