function modifyArray(array) {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
y
    let concatArray = array1.concat(array2);

    concatArray.copyWithin(concatArray.length, 0, 2);

    concatArray.fill(0, concatArray.length, 3, concatArray.length);

    let lastElement = concatArray.pop();

    let firstElement = concatArray.shift();

    concatArray.unshift(10, 20);


let result = {};

result.modifiedArray = concatArray;

result.lastElement = lastElement;

result.firstElement = firstElement;

return result;
}

console.log(modifyArray([]));