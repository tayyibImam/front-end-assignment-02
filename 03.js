const paymentsay = [14, 5, 1, 19, 8, 12, 20, 3, 7, 2, 18, 10, 6, 15, 11, 4, 9, 13, 17, 16];

for (let i = 0; i < paymentsay.length-1; i++) {
    
    for (let j = 0; j < paymentsay.length-1-i; j++) {
        if (paymentsay[j] > paymentsay[j+1]) 
        {
            [paymentsay[j], paymentsay[j+1]] = [paymentsay[j+1], paymentsay[j]];   
        }
        
    }
}

console.log(paymentsay);

// I could have used the built-in function to sort it,
// but I willingly skipped it to recall this algorithm.