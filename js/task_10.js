const transform = str => str.split('.').reverse().reduce((accum, value) => Object.defineProperty({}, value, {value: accum}), null);
