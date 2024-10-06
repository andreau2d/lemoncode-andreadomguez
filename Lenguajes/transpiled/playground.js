var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var head = function (_a) {
    var firstElement = _a[0], arrayRest = _a.slice(1);
    return firstElement;
};
var tail = function (_a) {
    var firstElement = _a[0], arrayRest = _a.slice(1);
    return arrayRest;
};
var init = function (array) {
    if (array === void 0) { array = []; }
    return array.slice(0, -1);
};
var last = function (array) {
    if (array === void 0) { array = []; }
    return __spreadArray([], array, true).pop();
};
var concat = function (a, b) {
    return __spreadArray(__spreadArray([], a, true), b, true);
};
var optionalConcat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (result, array) { return __spreadArray(__spreadArray([], result, true), array, true); }, []);
};
function clone(source) {
    return __assign({}, source);
}
function merge(source, target) {
    var sourceCloned = clone(source);
    var targetCloned = clone(target);
    return __assign(__assign({}, targetCloned), sourceCloned); //se añade primero target para darle prioridad al array source
}
