let div = document.querySelector('div');

    div.classList.add('class1');
    div.removeChild('class1');

    document.getElementById("toggleButton").addEventListener("click", function() {
    let target = document.getElementById("targetDiv");
    target.classList.toggle("active");
});

let paragraph = document.getElementById("checkParagraph");
let hasImportantClass = paragraph.classList.contains("important");

console.log(hasImportantClass);

let redDiv = document.getElementsByClassName('replaceDiv');
function changeClass(){
    redDiv.classList.add('blue');
}

let div1 = document.getElementById("itemDiv");
let secondClass = div.classList.item(1);

console.log(secondClass);