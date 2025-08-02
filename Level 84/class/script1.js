let products = [
    {name:'laptop', price:1200},
    {name:'silverware', price:110},
    {name:'couch', price:700},
    {name:'microwave', price:100},
];


let productNames = products.map(product => product.name);

console.log(productNames);

let affordableProducts = products.filter(product => product.price <= 100);

console.log(affordableProducts);

let totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(totalPrice);

let productNamesReversed = products.reduceRight((acc, curr) => {
    if (acc === "") {
    return curr.name;
    }
    return acc + " - " + curr.name;
}, "");

console.log(productNamesReversed);