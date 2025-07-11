let count = 0;
let btn = document.getElementById("incrementBtn");
let span = document.getElementById("counter");

btn.addEventListener("click", function() {
    count += 1;
    span.textContent = count;
});