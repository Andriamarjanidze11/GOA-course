function loveCalculator() {
    let name1 = prompt("შეიყვანეთ პირველი სახელი:");
    let name2 = prompt("შეიყვანეთ მეორე სახელი:");

    let loveScore = Math.floor(Math.random() * 100) + 1;

    let message = `${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${loveScore}%`;
    alert(message);
    console.log(message);
}

loveCalculator();