function delayedMessage() {
    let message = prompt("Enter your message:");
    let delay = parseInt(prompt("Enter delay in milliseconds:"), 10);

    if (!isNaN(delay)) {
    console.log(`Waiting ${delay} milliseconds...`);
    setTimeout(() => {
    alert(`Your message: ${message}`);
    }, delay);
    } else {
    alert("Please enter a valid number for the delay.");
    }
}

delayedMessage();