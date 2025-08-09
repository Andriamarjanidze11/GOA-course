const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Beka" },
    { id: 3, name: "Nino" },
    { id: 4, name: "Giorgi" }
];

const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);