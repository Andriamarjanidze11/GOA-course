function isEvenRepeated(n, times) {
    let result = n % 2 === 0 ? "even" : "odd";
    return result.repeat(times);
}

