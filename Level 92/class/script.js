class Car {
    constructor(name, year) {
    this.name = name;
    this.year = year;
    }

    age(currentYear) {
    return currentYear - this.year;
    }
}

const myCar = new Car("Toyota", 2015);
console.log(myCar.age(2025));




