class Universe {
    constructor() {
        if (Universe.instance instanceof Universe) {
            return Universe.instance;
        }

        this.size = 300;
        Universe.instance = this;
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