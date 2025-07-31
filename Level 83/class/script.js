let students = [
    { name: "Nika", grade: 88 },
    { name: "Ana", grade: 73 },
    { name: "Giorgi", grade: 95 },
    { name: "Salome", grade: 67 }
];

let allPassing = students.every(grade => grade <= 70);

let hasFailing = students.some(grade => grade < 65);

students.forEach(student => {
    console.log(`Student: ${student.name}`);
});

let honorRoll = [];

students.forEach(student => {
    if (student.grade >= 90) {
        honorRoll.push(student.name);
    }
});

console.log(allPassing);
console.log(hasFailing);
console.log(honorRoll);