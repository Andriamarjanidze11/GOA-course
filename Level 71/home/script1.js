function modifyArray(inputArray) {
    let numsArray = [1, 2, 3];
    let strArray = ['a', 'b', 'c'];
    let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);

combinedArray.fill("filled", 2, 5);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(100, 200);

    return combinedArray;
}

console.log(modifyArray([]));
