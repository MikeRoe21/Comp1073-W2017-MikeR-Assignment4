var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(textString, fontSize, fontType, fontColor, x, y, isCentered) {
            var _this = _super.call(this, textString, fontSize + " " + fontType, fontColor) || this;
            _this.textString = textString;
            _this.fontSize = fontSize;
            _this.fontType = fontType;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            if (_this.isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map