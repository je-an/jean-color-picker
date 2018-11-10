define([ // jscs:ignore
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge",
    "text!color-picker-html",
    "css!color-picker-css"
], function (
    DomElement,
    DomUtil,
    Inheritance,
    TypeCheck,
    Failure,
    Merge,
    controlHtml
) {
        /**
         * Provides a ColorPicker control  
         * @alias ColorPicker
         * @constructor
         * @param {Object} options - options object
         * @param {Object} options.color - color object
         * @param {Number} [options.color.r=128] - r value - range from 0 to 255
         * @param {Number} [options.color.g=128] - g value - range from 0 to 255
         * @param {Number} [options.color.b=128] - b value - range from 0 to 255
         */
        var ColorPicker = function (options) {
            options = TypeCheck.isDefined(options) ? options : { color: {} };
            var color = TypeCheck.isDefined(options.color) ? options.color : {};
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                html: controlHtml,
                color: {
                    r: (TypeCheck.isNumber(color.r) && color.r >= 0 && color.r <= 255) ? color.r : 128,
                    g: (TypeCheck.isNumber(color.g) && color.g >= 0 && color.g <= 255) ? color.r : 128,
                    b: (TypeCheck.isNumber(color.b) && color.b >= 0 && color.b <= 255) ? color.r : 128,
                }
            }, options));
            this.colorResult = DomUtil.getChildByClass(this.element, "color-value");
            this.rInput = DomUtil.getChildById(this.element, "r-input");
            this.gInput = DomUtil.getChildById(this.element, "g-input");
            this.bInput = DomUtil.getChildById(this.element, "b-input");
            this.rValue = DomUtil.getChildById(this.element, "r-value");
            this.gValue = DomUtil.getChildById(this.element, "g-value");
            this.bValue = DomUtil.getChildById(this.element, "b-value");
            this.rInput.addEventListener("input", this._onRedChange.bind(this));
            this.gInput.addEventListener("input", this._onGreenChange.bind(this));
            this.bInput.addEventListener("input", this._onBlueChange.bind(this));
            this._set();
        };
        Inheritance.inheritPrototype(ColorPicker, DomElement);
        /** @enum */
        ColorPicker.resultType = ColorPicker.prototype.resultType = {
            HEX: "hex",
            RGB: "rgb"
        };
        /**
         * @param {Object} options.color - color object
         * @param {Number} options.color.r - range from 0 to 255
         * @param {Number} options.color.g - range from 0 to 255
         * @param {Number} options.color.b - range from 0 to 255
         */
        ColorPicker.prototype.set = function (color) {
            var isSet = false;
            if (TypeCheck.isNumber(color.r) && color.r >= 0 && color.r <= 255 &&
                TypeCheck.isNumber(color.g) && color.g >= 0 && color.g <= 255 &&
                TypeCheck.isNumber(color.b) && color.b >= 0 && color.b <= 255) {
                this.options.color.r = color.r;
                this.options.color.g = color.g;
                this.options.color.b = color.b;
                this._set();
                isSet = true;
            }
            return isSet;
        };
        /** @param {ColorPicker.resultType} resultType - the type of result */
        ColorPicker.prototype.get = function (resultType) {
            var result, color = this.options.color;
            if (!TypeCheck.isEnumValue(resultType, this.resultType)) {
                Failure.throwTypeError("resultType is not a value of ColorPicker.resultType");
            }
            if (resultType === this.resultType.HEX) {
                result = "#" + toHex(color.r) + toHex(color.g) + toHex(color.b);
            } else if (resultType === this.resultType.RGB) {
                result = color;
            }
            return result;
            function toHex(c) {
                var hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }
        };
        /** */
        ColorPicker.prototype._set = function () {
            var color = this.options.color;
            this.colorResult.style.background = "rgb(" + color.r + ", " + color.g + " , " + color.b + ")";
            this.rInput.value = this.rValue.innerHTML = color.r;
            this.gInput.value = this.gValue.innerHTML = color.g;
            this.bInput.value = this.bValue.innerHTML = color.b;
        };
        /** */
        ColorPicker.prototype._onRedChange = function () {
            this.options.color.r = parseInt(this.rInput.value);
            this._set();
        };
        /** */
        ColorPicker.prototype._onGreenChange = function () {
            this.options.color.g = parseInt(this.gInput.value);
            this._set();
        };
        /** */
        ColorPicker.prototype._onBlueChange = function () {
            this.options.color.b = parseInt(this.bInput.value);
            this._set();
        };
        return ColorPicker;
    });

