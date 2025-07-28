function checkType(value) {
    let primitives = ["string", "number", "boolean", "undefined", "symbol", "bigint"];
    return value === null || primitives.includes(typeof value) ? "primitive" : "non-primitive";
}