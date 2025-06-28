function messageOne() {
    console.log("First message: Starting the process...");
}

function messageTwo() {
    console.log("Second message: Processing...");
}

function messageThree() {
    console.log("Third message: Done!");
}

// Execute each function with delays in sequence
setTimeout(messageOne, 1000);       // after 1 second
setTimeout(messageTwo, 2000);       // after 2 seconds
setTimeout(messageThree, 3000);     // after 3 seconds