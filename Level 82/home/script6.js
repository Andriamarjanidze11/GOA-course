const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key); // indexes: 0, 1, 2
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value); // actual values: "JS", "React", "Node"
}