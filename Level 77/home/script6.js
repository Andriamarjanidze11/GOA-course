let list = document.getElementById("removableList");
let items = list.getElementsByTagName("li");

if (items.length > 1) {
    let secondItem = items[1];
    list.removeChild(secondItem);
}