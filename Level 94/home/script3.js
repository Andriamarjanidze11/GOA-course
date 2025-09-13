console.log("Start program");

setTimeout(() => {
    console.log("Async 1 second");
}, 1000);

setTimeout(() => {
    console.log("Async 2 seconds");
}, 2000);

console.log("End program");