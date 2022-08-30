const flag = true

if(!flag)
{
    console.log("I am the true dude")
}else
{
    console.log("I am not the true dude")
}

let i = 0
while(i > 10)
{
    i++
    console.log(i)
}

do
{
    i++ 
}while(i > 10)
console.log(i + ": Do while is definitely work 1 time")


for(let k = 0 ; k <= 10 ; k++)
{
    console.log(k)
}

console.log("***************")

// or operator

for(let l = 1 ; l <= 10 ; l++)
{
    if(l % 2 == 0 || l % 3 == 0)
    {
        console.log(l)
    }
}

console.log("***************")

// and operator with nested

let n = 0
for(let m = 1 ; m <= 100 ; m++)
{
    if(m % 2 == 0 && m % 5 == 0)
    {
        n++
        console.log(m)
        if(n == 4)
        break
    }
}

// break

console.log("***************")
let required = true
while(required)
{
    console.log(required)
    break
    // or --> required = false
}

