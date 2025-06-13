function addValueToArray(arr, value) {
    return arr.push(value);
}

let myArray = [1, 2, 3];
let newLength = addValueToArray(myArray, 4);

console.log(newLength);
console.log(myArray);