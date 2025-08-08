a="156"
c=a.split("")
// console.log(c)
sum=0
b=String(Math.abs(a)).length

for(i=0;i<b;i++)
{
    sum+=c[i]**b
}
console.log(sum)
if(sum==a)
{
    console.log("armstrong")
}
else
{
    console.log("not armstrong")
}