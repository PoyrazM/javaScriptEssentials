// block of code

function add(a,b)
{
   return a + b  
}

let sum = add(15,20)
console.log(sum)

// do not have name => Anonymous function -- Function Expressions

let sumOfIntegers = function(c,d)
{
    return c + d
}
console.log(sumOfIntegers(35,25))

// Simple way for the Anonymous function
let sumOfNumbers = (e,f) => e + f
console.log(sumOfNumbers(25,15))

// var - global level/functional

var greet = "Divide Method"

function divide(m,n) 
{
    console.log(greet)
    return m / n
}

console.log(divide(10,2))

console.log("Before :" + greet)
if(true)
{
    var greet = "be Changing the String"
}
console.log("After :" + greet)

// let global level/block level {} let is not changing with keyword , be write to dont use let keyword , should be use just variable name

let dude = "Best Buddy"
console.log(dude)
if(true)
{
    let dude = "Best Best Buddy with let keyword"
}
console.log(dude)

// this way is changing the let variables
if(true)
{
    dude = "Best Best Buddy"
}
console.log(dude)

// const is not changing anywhere , looks like the final keyword Java
const name = "Mertcan"
//name = "k"
console.log(name)