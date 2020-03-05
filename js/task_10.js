const transform = str => str.split('.').reverse().reduce((accum, value) => {
    const obj = {};

    obj[value] = accum;

    return obj;
}, null);
