let numbers = [1,2,3,4,5];

numbers.forEach((num,index) => {
    numbers[index] = num * 2;

    console.log(numbers[index])
});