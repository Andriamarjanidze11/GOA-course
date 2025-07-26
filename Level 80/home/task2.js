// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let res = [];

    if (n === 0) {
    return [0];
    }

    while (n > 0) {
    let digit = n % 10;
    res.push(digit);
    n = Math.floor(n / 10);
    }
    return res
}