function firstAsync() {
    setTimeout(() => {
    console.log("First async done");
    }, 2000);
}

function secondAsync() {
    setTimeout(() => {
    console.log("Second async done");
    }, 1000);
}

firstAsync();
secondAsync();