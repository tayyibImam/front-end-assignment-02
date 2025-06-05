var living_costbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let maxliving_cost = living_costbers[0];

for (let i = 1; i < living_costbers.length; i++) {
    if(maxliving_cost < living_costbers[i])
    {
        maxliving_cost = living_costbers[i];
    }
    
}

console.log(maxliving_cost);