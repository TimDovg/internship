class Universe {
    constructor() {
        if (Universe.instance) {
            return Universe.instance;
        }

        Universe.instance = {};
        Universe.instance.size = 300;
        Object.setPrototypeOf(Universe.instance, Universe.prototype);
        return Universe.instance;
    }

    getSize() {
        return this.size;
    }

    setSize(value) {
        return this.size = value;
    }
}

let a = new Universe();
let b = new Universe();

console.log(a === b); //true
console.log(a.getSize(), b.getSize()); //300, 300
a.setSize(200);
console.log(a.getSize(), b.getSize()); //200, 200