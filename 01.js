var result = -1

if (result < 0) 
{
    console.log("Failed!");
}
else if (result >= 0 && result < 40) 
{
    console.log("Tumi C Paiso");
}
else if (result >= 40 && result < 60) 
{
    console.log("Tumi B Paiso");
}
else if (result >= 60 && result < 70) 
{
    console.log("Tumi A- Paiso");
}
else if (result >= 70 && result < 80) 
{
    console.log("Tumi A Paiso");
}

else if (result >= 80 && result <= 100) 
{
    console.log("Tumi A+ Paiso");
}
else
{
    console.log("Invalid");
}