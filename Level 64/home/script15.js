function evenOrOdd(n) {
    switch(n) {
        case n % 2 === 0:
            console.log('Even');
            break;
        case n % 3 === 0:
            console.log('Odd');
            break;
    }
    return n;
}

