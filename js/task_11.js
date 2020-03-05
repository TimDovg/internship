const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
const intersection = (arr1, arr2) => [...new Set(arr1)].filter(num => [...new Set(arr2)].includes(num));
const difference = (arr1, arr2) => [...new Set(arr1.filter(num => !arr2.includes(num)))];

console.log(union([4,5,7,2,1,5],[1,2,3,7,9])); // [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1,2,3], [4,3,2])); // [2, 3]
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5])); // [3, 9]
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])); // [4, 5]
