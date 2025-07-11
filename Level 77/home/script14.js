let checkBtn = document.getElementById("checkAnswerBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function() {
    let answers = document.getElementsByName("q1");
    let selected;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
        selected = answers[i].value;
        break;
    }
}

    if (selected === "თბილისი") {
        result.textContent = "სწორია";
        } else {
    result.textContent = "არასწორია";
    }
});