let weather = Number(prompt('Enter the weather: '))

switch(weather) {
    case 1:
        console.log('Sunny');
        break;
    case 2:
        console.log('Rainy')
        break;
    case 3:
        console.log('Cloudy')
        break;
    case 4:
        console.log('Windy')
        break;
    default:
        console.log('Not Established');
}