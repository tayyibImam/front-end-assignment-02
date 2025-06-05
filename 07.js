var living_costbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < living_costbers.length; i++) {
    for (let j = i+1; j < living_costbers.length; j++) {
        if (living_costbers[i] == living_costbers[j]) {
            living_costbers.splice(j, 1);
        }
        
    }
    
}

console.log(living_costbers);