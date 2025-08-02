const items = [
    { name: "Laptop", price: 1500, quantity: 2 },
    { name: "Mouse", price: 25, quantity: 4 },
    { name: "Monitor", price: 300, quantity: 1 }
];

const totalValue = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

console.log(totalValue);
