function concatenateAndPush(arr1, arr2, newValue) {
    let concatenatedArray = arr1.concat(arr2);
    concatenatedArray.push(newValue);
    return concatenatedArray;
}

console.log(concatenateAndPush([1, 2], [3, 4], 5));