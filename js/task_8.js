Object.myCreate = function (objPrototype = null, property = {}) {
    const createdObj = {};

    if (objPrototype === null) {
        Object.setPrototypeOf(createdObj, null);
    } else {
        Object.setPrototypeOf(createdObj, Object.getPrototypeOf(objPrototype));
    }
    Object.assign(createdObj, property);
    return createdObj;
};
