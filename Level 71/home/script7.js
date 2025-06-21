let cartItems = ['apple', 'banana', 'orange'];
let prices = [1.2, 0.8, 1.5];

function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return {
    cartItems,
    prices
    };
}

function removeFirstItem(item,price){
    cartItems.shift(item);
    prices.shift(price);
    return {
    cartItems,
    prices
    };
}

function replaceItem(cartItems, prices, index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return { cartItems, prices };
}

function createReceipt(cartItems) {
    return cartItems.join(', ');
}

function applyDiscount(prices, discountPrice) {
    return prices.fill(discountPrice);
}

console.log(addItem('grapes', 2.0));