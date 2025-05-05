let coffee = Number(prompt('Enter a number: '));

switch(coffee) {
    case 1:
        console.log('Americano');
        break;
    case 2:
        console.log('Espresso');
        break;
    case 3:
        console.log('Cappucino');
        break;
    default:
        console.log('Unknown');
        break;
}