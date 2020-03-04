Array.prototype.duplicate = function() {
    return [...this];
};

Function.prototype.call = function (obj, ...args) {
    obj.func = this;
    return obj.func(...args);
};

Function.prototype.apply = function (obj, args) {
    obj.func = this;
    return obj.func(...args);
};

Function.prototype.bind = function (obj) {
    const myFunction = this;

    return (...args) => (() => myFunction.apply(obj, args))();
};
