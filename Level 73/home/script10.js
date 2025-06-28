function updateGreeting() {
    let greetingElement = document.getElementById("greeting");
    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

    greetingElement.textContent = greeting;
}

updateGreeting(); // Initial call
setInterval(updateGreeting, 1000); // Update every second