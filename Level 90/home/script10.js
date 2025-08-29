function flatten(...args) {
    return args.reduce((acc, item) => {
    if (Array.isArray(item)) {
        return acc.concat(flatten(...item));
    }
    return acc.concat(item);
    }, []);
}