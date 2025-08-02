const words = ["programming", "love", "I"];

const sentence = words.reduceRight((acc, word) => acc + " " + word) + ".";

console.log(sentence);