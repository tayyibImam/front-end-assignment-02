var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let maxName = friends[0];

for (let i = 1; i < friends.length; i++) {
    if(maxName.length < friends[i].length)
    {
        maxName = friends[i];
    }
    
}

console.log(maxName);