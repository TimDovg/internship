const transform = str => str.split('.').reduceRight((accum, value) => ({[value]: accum}), null);
