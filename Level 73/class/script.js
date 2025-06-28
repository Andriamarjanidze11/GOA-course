function updateClock() {
    let date = new Date();
    document.getElementById("current").textContent = date.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();


let futureDate = new Date();
futureDate.setFullYear(2028);
futureDate.setMonth(0);
futureDate.setDate(1);
document.getElementById("modified").textContent = futureDate.toDateString();