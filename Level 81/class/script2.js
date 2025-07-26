let car = {
    brand: 'Toyota',
    model: 'Corolla',
    color: 'White'
};

for (let key in car) {
    console.log(key);
}

for (let key in car) {
    console.log(car[key]);
}

console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, ფერი - ${car.color}.`);