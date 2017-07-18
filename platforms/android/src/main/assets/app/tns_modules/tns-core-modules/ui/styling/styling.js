var styleModule = require("./style");
var stylePropertyModule = require("./style-property");
var convertersModule = require("./converters");
exports.Property = stylePropertyModule.Property;
exports.Style = styleModule.Style;
var properties;
(function (properties) {
    properties.fontSizeProperty = styleModule.fontSizeProperty;
    properties.colorProperty = styleModule.colorProperty;
    properties.placeholderColorProperty = styleModule.placeholderColorProperty;
    properties.backgroundColorProperty = styleModule.backgroundColorProperty;
    properties.textAlignmentProperty = styleModule.textAlignmentProperty;
    properties.getPropertyByName = stylePropertyModule.getPropertyByName;
    properties.getPropertyByCssName = stylePropertyModule.getPropertyByCssName;
    properties.eachProperty = stylePropertyModule.eachProperty;
    properties.eachInheritableProperty = stylePropertyModule.eachInheritableProperty;
})(properties = exports.properties || (exports.properties = {}));
;
var converters;
(function (converters) {
    converters.colorConverter = convertersModule.colorConverter;
    converters.fontSizeConverter = convertersModule.fontSizeConverter;
    converters.textAlignConverter = convertersModule.textAlignConverter;
    converters.numberConverter = convertersModule.numberConverter;
    converters.visibilityConverter = convertersModule.visibilityConverter;
})(converters = exports.converters || (exports.converters = {}));
;
//# sourceMappingURL=styling.js.map