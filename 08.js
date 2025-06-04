var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if(maxNum < numbers[i])
    {
        maxNum = numbers[i];
    }
    
}

console.log(maxNum);