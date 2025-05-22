function hasA(word) {
    for (let i = 0; i < word.length; i++) {
        
        if (word[i] === 'a' , word[i] === 'A') {
            return "yes";
        } else {
            return "no";
        }
    }
}

console.log(hasA("Apple"));
console.log(hasA("Hello"));
console.log(hasA("Banana"));