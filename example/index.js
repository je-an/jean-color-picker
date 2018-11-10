require(["ColorPicker", "css!bootstrap"], function (ColorPicker) {
    var picker = new ColorPicker(/* {
        color: {
            r: 133,
            g: 135,
            b: 167
        }
    } */);
    document.body.appendChild(picker.element);
    console.log(picker.get(picker.resultType.RGB));
    console.log(picker.get(picker.resultType.HEX));
    console.log(picker.set({ r: 255, g: 0, b: 0 }));
});