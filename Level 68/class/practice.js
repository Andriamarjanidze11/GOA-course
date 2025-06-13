let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

let merged = Object.assign(target, source);
console.log(merged);

let person = { name: "Andria", age: 30 };

console.log(Object.entries(person));

console.log(Object.keys(person));

console.log(Object.values(person));

let car = { brand: "Toyota", model: "Corolla" };

Object.freeze(car);
car.model = "Camry";
console.log(car.model);

console.log(Object.isFrozen(car));