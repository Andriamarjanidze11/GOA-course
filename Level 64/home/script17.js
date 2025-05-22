function numberSign(n) {
    switch(true) {
        case n > 0:
            console.log('Positive')
            break;
        case n = 0:
            console.log('Zero')
            break;
        case n < 0:
            console.log('Negative')
            break;
        default:
            console.log('Undefined')
            break;
    }
    return n
}