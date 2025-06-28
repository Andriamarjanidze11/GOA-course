function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) , (year % 400 === 0) ? "leap" : "noLeap";
}


let year = parseInt(prompt("Enter a year:"), 10);
console.log(isLeapYear(year));