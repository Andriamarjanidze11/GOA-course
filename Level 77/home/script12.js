let toggleBtn = document.getElementById("toggleTextBtn");
let text = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function() {
    if (text.style.display === "none") {
    text.style.display = "block";
    } else {
    text.style.display = "none";
    }
});