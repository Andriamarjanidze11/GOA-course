function carelessFunction() {
  accidentalVar = 42; // No let/const/var!
}

carelessFunction();
console.log(accidentalVar); // 42