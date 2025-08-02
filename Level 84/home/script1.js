let users = [
    { name: "Andria", email: "andria@example.com" },
    { name: "Nino", email: "nino@example.com" },
    { name: "Giorgi", email: "giorgi@example.com" }
];

let formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);
