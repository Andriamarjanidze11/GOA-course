console.log("ლომიიიიიიიიიიიი");

function vfexvi() {
    return "ვფექსვი ფუნქცია მუშაობს!";
}

function lomi() {
    return "ლომი ფუნქცია მუშაობს!";
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        console.log("მონაცემები წამოღებულია:");
        console.log(json);

        console.log("vfexvi():", vfexvi());
        console.log("lomi():", lomi());

        console.log("ლომიიიიიიიიიიიი");
    })
    .catch(error => {
        console.error("შეცდომა მონაცემების წამოღებისას:", error);
    });
