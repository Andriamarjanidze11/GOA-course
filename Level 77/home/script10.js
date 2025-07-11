let button = document.getElementById("changeColorBtn");
let box = document.getElementById("colorBox");

button.addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
});