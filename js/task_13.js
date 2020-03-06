const sum = a => {
    let count = a;
    const func = b => {
        if (!b) return count;

        count += b;

        return func;
    };

    func.toString = () => count;

    return func;
};

console.log(sum(1)(2)(3)()); //6
console.log(sum(1)(2)(3)(4) + 1); //11
console.log(sum(1)(2)(3)(4)(5) + 1); //16
