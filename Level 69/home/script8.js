function evenIndexedElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

console.log(evenIndexedElements([10, 20, 30, 40, 50, 60]));
