let list = document.createElement("ul");

let items = ["Item 1", "Item 2", "Item 3"];
items.forEach(text => {
    let li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
});

document.body.appendChild(list);

console.log("First child:", list.firstElementChild);
console.log("Last child:", list.lastElementChild);