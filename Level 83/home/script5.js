const products = [
    { name: "Notebook", price: 25 },
    { name: "Pen", price: 5 },
    { name: "Bag", price: 45 }
];

const hasAffordableProduct = products.some(product => product.price < 20);
console.log(hasAffordableProduct); // true or false depending on the data