const mixedData = {
    name: "Dudu",
    age: 27,
    isStudent: true,
    score: 95,
    city: "Tbilisi",
    hasLaptop: true,
    height: 175
};

for (let key in mixedData) {
    if (typeof mixedData[key] === "number") {
    console.log(key + ": " + mixedData[key]);
    }
}