const transform = str => str.split('.').reverse().reduce((accum, value) => ({[value]: accum}), null);
