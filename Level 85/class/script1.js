const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

const firstString = mixedData.find(item => typeof item === "string");

console.log(firstString);

const fruits = ["mango", "orange"];

const isFruitsArray = Array.isArray(fruits);

console.log(isFruitsArray);

const stringLengths = Array.from(
    mixedData.filter(item => typeof item === "string"),
    str => str.length
);

console.log(stringLengths);


console.log(reversedData); 


newArray = [10,5,20];

const sortedNumbers = newArray.sort((a, b) => a -b);

console.log(newArray);
