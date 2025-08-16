// example 1

let name = 'dudu'
let age = 13

let person = {
    name:name,
    age:age
}

console.log(person)


//  example 2


let car = 'toyota';
let model = 'corola';

let car1 = {
    car,
    model,

    res() {
        console.log(`Car brand is ${this.car} and model is ${this.model}.`);
    }
};

console.log(car1);
car1.res();


// example 3

const brand1 = 'Toyota';
const model1 = 'Corolla';
const year = 2025;

const car2 = {
    brand1,
    model1,
    year,
    getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
    }
};

console.log(car2.getInfo());


// example 4 

const key = 'student';
const action = 'greet';

const user = {
    [key]: 'Andria',
    [action]() {
    console.log(`Hello, ${this.student}!`);
    }
};

user.greet();

// example 5

const operation = 'multiply';
const a = 6;
const b = 7;

const calculator = {
    a,
    b,
    [operation]() {
        return this.a * this.b;
    }
};

console.log(calculator.multiply());