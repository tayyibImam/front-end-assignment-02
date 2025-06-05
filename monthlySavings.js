function monthlySavings(payments, living_cost) {
    if (typeof payments != "object" || typeof living_cost != "number") {
        return "invalid input";
    }
    else{
        let total = 0
        for (let i = 0; i< payments.length; i++) {
            if (payments[i] >= 3000) {
                total += (payments[i] - payments[i]*0.20);
            }
            else{
                total += payments[i];
            }
           
        }
        if(total - living_cost < 0){
            return '"earn more"';
            
        }
        else{
            return total-living_cost;
        }
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));

