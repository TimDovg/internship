Object.myCreate = function (objPrototype = null, objProperty = {}) {
    class ObjectByMyCreate {
        constructor(objPrototype, objProperty) {
            if (objPrototype === null) {
                this.__proto__ = null;
            } else {
                this.__proto__ = objPrototype.__proto__;
            }

            for (let prop in objProperty) {
                this[prop] = objProperty[prop];
            }
        }
    }

    return new ObjectByMyCreate(objPrototype, objProperty);
};
