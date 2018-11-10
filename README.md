## Description

Provides color picking functionality

## Support
Supports AMD eco system. If there is no loader, ColorPicker is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var picker = new ColorPicker({
    color: {
        r: 128,
        g: 128,
        b: 128
    }
});
```
- Use it with require.js
```js
require(["path/to/ColorPicker"], function(ColorPicker){
    // Work with ColorPicker
});
```
- Use it with node.js
```js
var ColorPicker = require("jean-color-picker");
```
## Installation

`npm install jean-color-picker --save --legacy-bundling`

## API Reference

**Options**

- **color**: `Object` - `optional` - color object
- **color.r**: `Number` - `optional` - red value - range from 0 to 255
- **color.g**: `Number` - `optional` - green value - range from 0 to 255
- **color.b**: `Number` - `optional` - blue value - range from 0 to 255

### ColorPicker.resultType

- **HEX**: `String` - Result will be an css hex string
- **RGB**: `Object` - Result will be an rgb object descipted like options.color

### ColorPicker.set(color) 

Sets the provided color

**Parameters**
- **color**: `Object` - `optional` - color object
- **color.r**: `Number` - `optional` - red value - range from 0 to 255
- **color.g**: `Number` - `optional` - green value - range from 0 to 255
- **color.b**: `Number` - `optional` - blue value - range from 0 to 255

**Returns**
- `Boolean` - True, if the color is set, false otherwise

### ColorPicker.get(resultType) 

Gets the current selected color

**Parameters**
- **resultType**: `ColorPicker.resultType` - `mandatory` - the result type

**Returns**
- `Object|String` - Returns object if result type was rgb. Returns css hex string if result type was hex

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT