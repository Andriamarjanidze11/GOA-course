let span = document.createElement("span");
span.textContent = "This is a span.";

let container = document.getElementById("container");
container.appendChild(span);

console.log("Parent of span:", span.parentElement);