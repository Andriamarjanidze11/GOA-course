const customerOrders = [
    {
    orderId: 101,
    customerId: 1,
    items: [
        { title: "JavaScript Basics", price: 15, quantity: 1 },
        { title: "CSS Mastery", price: 20, quantity: 2 }
    ],
    shippingAddress: "Tbilisi, Georgia",
    isDelivered: true
    },
    {
    orderId: 102,
    customerId: 2,
    items: [],
    shippingAddress: "Batumi, Georgia",
    isDelivered: false
    },
    {
    orderId: 103,
    customerId: 3,
    items: [
        { title: "HTML Guide", price: 8, quantity: 1 },
        { title: "React Handbook", price: 25, quantity: 1 }
    ],
    shippingAddress: "Kutaisi, Georgia",
    isDelivered: true
    }
];

const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);

const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);
console.log("There is a pending delivery:", hasPendingDelivery);

customerOrders.forEach(order => {
    console.log(`Processing Order ID: ${order.orderId}`);

    order.items.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
    });

    const allExpensive = order.items.every(item => item.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

    const hasMultiples = order.items.some(item => item.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultiples}`);
});