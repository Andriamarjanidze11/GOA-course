let people = [{ name: 'Alice' }, { name: 'Bob' }];
let places = [{ city: 'Paris' }, { city: 'London' }];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2);

mergedArray.fill({ city: 'New York' }, mergedArray.length - 2);

mergedArray.pop();

mergedArray.shift();

mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });

console.log(mergedArray);