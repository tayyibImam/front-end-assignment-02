var living_costbers = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let maxliving_cost = living_costbers[0];

for (let i = 1; i < living_costbers.length; i++) {
    if(maxliving_cost.length < living_costbers[i].length)
    {
        maxliving_cost = living_costbers[i];
    }
    
}

console.log(maxliving_cost);