const users = [
    { name: "Ana", age: 22 },
    { name: "Giorgi", age: 30 },
    { name: "Nino", age: 19 }
];

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults);