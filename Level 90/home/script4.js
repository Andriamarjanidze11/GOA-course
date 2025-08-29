function logExceptLast(...items) {
    items.slice(0, -1).forEach(item => console.log(item));
}