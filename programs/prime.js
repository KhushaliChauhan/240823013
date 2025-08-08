a=11
pri=0
j=0
for(i=0;i<=a;i++)
{
    if(a%i==0)
    {
        console.log(i)
        pri=i
        j++
    }
}

if(j<=2 && pri==a)
{
    console.log("Number is Prime")
}
else
{
    console.log("number is not prime")
}