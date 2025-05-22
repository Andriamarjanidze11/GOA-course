function isShort(text) {
    switch (true) {
        case text.length < 5:
            console.log("short");
            break;
        default:
            console.log("long");
            break;
    }
    return text;
}

console.log(isShort("hi"));
console.log(isShort("hello"));