const anagrams = arr => {
    const objWithAnagrams = {};

    [...arr].map(str => str.split('').sort().join('')).forEach(str => objWithAnagrams[str] = []);
    arr.forEach(el => objWithAnagrams[el.split('').sort().join('')].push(el));

    return Object.values(objWithAnagrams);
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
