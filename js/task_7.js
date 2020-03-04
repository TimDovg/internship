Array.prototype.duplicate = function() {
    return [...this, ...this];
};

Function.prototype.call = function (obj, ...args) {
    return this.apply(obj, args);
};

Function.prototype.apply = function (obj, args) {
    return this.call(obj, ...args);
};

Function.prototype.myBindByApply = function(context, ...args) {
    return () => this.apply(context, args);
};
