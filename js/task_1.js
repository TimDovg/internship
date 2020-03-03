class Universe {
    constructor() {
        if (Universe.instance) {
            return Universe.instance;
        }

        const instance = {
            size: 300,
            getSize: function () {
                return this.size;
            },
            setSize: function (value) {
                return this.size = value;
            }
        };

        return Universe.instance = instance;
    }
}

let a = new Universe();
let b = new Universe();

console.log(a === b); //true
console.log(a.getSize(), b.getSize()); //300, 300
a.setSize(200);
console.log(a.getSize(), b.getSize()); //200, 200