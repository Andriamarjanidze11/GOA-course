function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = prompt("Enter temperature in Celsius:");
if (celsius !== null) {
    let fahrenheit = toFahrenheit(+celsius);
    alert(`The temperature in Fahrenheit is: ${fahrenheit}`);
}