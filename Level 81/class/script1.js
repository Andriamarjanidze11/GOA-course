let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];
let passCount = 0;

for (let score of scores) {
    if (score >= 70) {
        passCount++;
    }
}

console.log(`Number of students who passed: ${passCount}`);