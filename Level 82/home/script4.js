function countTruthiesAndFalsies(arr) {
    let result = { truthy: 0, falsy: 0 };
    arr.forEach(item => {
    if (item) {
        result.truthy++;
    } else {
        result.falsy++;
    }
    });
        return result;
}