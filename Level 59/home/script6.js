let temperature = prompt('Enter temperature in Celsius: ')

if(temperature < 5) {
    console.log('Cold')
} else if(temperature > 10 && temperatue < 20) {
    console.log('Normal')
} else if(temperature > 25) {
    console.log('Hot')
}