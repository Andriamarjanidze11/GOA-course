document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("mainImage");

    image.addEventListener("click", function () {
    if (image.src.includes("first.jpg")) {
        image.src = "images/second.jpg";
    } else {
        image.src = "images/first.jpg";
    }
    });
});