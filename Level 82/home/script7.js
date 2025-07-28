const obj = { lang: "JavaScript", level: "Intermediate", type: "Script" };
const arr = ["JS", "React", "Node"];

console.log("Object Keys:");
for (let key in obj) {
  console.log(key); // lang, level, type
}

console.log("Array Values:");
for (let value of arr) {
    console.log(value); // JS, React, Node
}