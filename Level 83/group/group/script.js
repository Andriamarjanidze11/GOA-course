// -----------------------------------------------------------------

// adding event listener

document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.getElementById("count");
    let count = 0;

// adding event listener

// -----------------------------------------------------------------

// script for incement button

    document.getElementById("increase").addEventListener("click", () => {
    count++;
    updateDisplay();
    });

// script for incement button

// -----------------------------------------------------------------

// script for decrement button

    document.getElementById("decrease").addEventListener("click", () => {
    count--;
    updateDisplay();
    });

// script for decrement button

// -----------------------------------------------------------------

// script for reset button

    document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateDisplay();
    });

// script for reset button

// -----------------------------------------------------------------

// script for updating the number and displaying the whole code

    function updateDisplay() {
    countDisplay.textContent = count;
    }
});

// script for updating the number and displaying the whole code

// -----------------------------------------------------------------