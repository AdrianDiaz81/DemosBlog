define(["require", "exports"], function (require, exports) {
    var Utils;
    (function (Utils) {
        (function (typeLogger) {
            typeLogger[typeLogger["Console"] = 0] = "Console";
            typeLogger[typeLogger["Alert"] = 1] = "Alert";
        })(Utils.typeLogger || (Utils.typeLogger = {}));
        var typeLogger = Utils.typeLogger;
        var Logger = (function () {
            function Logger(type) {
                this.type = type;
            }
            Logger.prototype.info = function (text) {
                switch (this.type) {
                    case typeLogger.Console:
                        console.info(text);
                        break;
                    case typeLogger.Alert:
                        alert(text);
                        break;
                    default:
                        break;
                }
            };
            Logger.prototype.warning = function (text) {
                switch (this.type) {
                    case typeLogger.Console:
                        console.warn(text);
                        break;
                    case typeLogger.Alert:
                        alert(text);
                        break;
                    default:
                        break;
                }
            };
            Logger.prototype.error = function (text) {
                switch (this.type) {
                    case typeLogger.Console:
                        console.error(text);
                        break;
                    case typeLogger.Alert:
                        alert(text);
                        break;
                    default:
                        break;
                }
            };
            return Logger;
        })();
        Utils.Logger = Logger;
    })(Utils = exports.Utils || (exports.Utils = {}));
});
