class Person {
    constructor(name, age, country) {
        this.name;
        this.age;
        this.country;
    }

    sentance(){
        return `my name is ${this.name}, i am ${this.age} years old and i am from ${this.country}.`
    }
}

let person1 = new Person('Dudu', 13, 'Georgia');
console.log(person1.sentance());