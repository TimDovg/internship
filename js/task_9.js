function myNew(constructor, param) {
    const obj = Object.create(constructor.prototype);
    const result = constructor.call(obj, param);

    return (typeof result === 'object' && result !== null) ? result : obj;
}
