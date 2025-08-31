const dna = 'A|T|G|C|A|G';
const result = dna.split('|').reduce((acc, curr, index, arr) => {
    acc.push(curr);
    if (index < arr.length - 1) acc.push('X');
    return acc;
}, []);

console.log(result);