function sameLastDigit(a, b) {
    return a % 10 === b % 10 ? "same" : "different";
}

console.log(sameLastDigit(27, 7));
console.log(sameLastDigit(19, 22));