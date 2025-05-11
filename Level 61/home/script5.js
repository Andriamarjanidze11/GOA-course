for (let num = 1; num <= 100; num++) {
    let output = "";

    if (num % 3 === 0) output += "Fizz";
    if (num % 5 === 0) output += "Buzz";

    switch (output) {
        case "FizzBuzz":
            console.log("FizzBuzz");
            break;
        case "Fizz":
            console.log("Fizz");
            break;
        case "Buzz":
            console.log("Buzz");
            break;
        default:
            console.log(num);
    }
}