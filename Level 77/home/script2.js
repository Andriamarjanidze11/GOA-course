let list = document.getElementById("itemList");

let newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);

let firstItem = list.querySelector("li");
if (firstItem) {
    list.removeChild(firstItem);
}

let updatedItem = list.querySelectorAll("li")[1];
if (updatedItem) {
    updatedItem.textContent = "Updated Item 2";
}