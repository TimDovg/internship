Object.myCreate = (() => {
    function Temp() {}

    return (objPrototype = null, objProperty = {}) => {
        Temp.prototype = objPrototype;
        const obj = new Temp();
        Temp.prototype = null;

        for (let prop in objProperty) {
            if (objProperty.hasOwnProperty(prop)) {
                obj[prop] = objProperty[prop];
            }
        }

        return obj;
    };
})();
