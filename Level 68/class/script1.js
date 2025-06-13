let academy = {
    name: "Tech Academy",
    courses: ["JavaScript", "Python", "AI"],
    socialLink: "https://goaisbest.com",
    reviews: {
        user1: { name: "Andria", status: "parent", review: "Excellent courses!" },
        user2: { name: "Nino", status: "child", review: "Very helpful materials." },
        user3: { name: "Giorgi", status: "parent", review: "Highly recommend!" }
    }
};

console.log(Object.entries(academy));

console.log(Object.keys(academy));
ა
console.log(Object.values(academy));

console.log(academy.hasOwnProperty("courses"));

let newAcademy = { member: "Premium Users" };
let mergedAcademy = Object.assign({}, academy, newAcademy);
console.log(mergedAcademy);

Object.freeze(academy);

console.log(Object.isFrozen(academy));
