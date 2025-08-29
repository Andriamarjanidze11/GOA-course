const data = [1, [2, 3, 4], 5];

const [first, [ , ...nestedRest], ] = data;

console.log(first);
console.log(nestedRest);