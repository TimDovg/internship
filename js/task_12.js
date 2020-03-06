const anagrams = arr => {
    const clone = [...arr].map(str => str.split('').sort().join(''));
    const result = [];

    for (let i = 0; i < clone.length; i++) {
        if (clone[i] === null) continue;
        const tmp = [arr[i]];

        for (let j = i + 1; j < clone.length; j++) {
            if (clone[i] === clone[j]) {
                tmp.push(arr[j]);
                clone[j] = null;
            }
        }

        result.push(tmp);
    }

    return result;
};

const input = [
    'вертикаль',
    'кильватер',
    'апельсин',
    'спаниель',
    'австралопитек',
    'ватерполистка',
    'кластер',
    'сталкер',
    'стрелка'
];

anagrams(input);
