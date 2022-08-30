var marks = Array(6)

// same operations
var marks = new Array(20 , 40 , 35 , 12 , 37 , 100)
var marks = [20 , 40 , 35 , 12 , 37 , 100]

subMarks = marks.slice(2,5)
console.log(subMarks)

console.log(marks[2])
console.log(marks[3])

marks[3] = 78
console.log(marks[3])
console.log(marks.length)

// Added 
marks.push(90)
console.log(marks)

// Delete the last
marks.pop()
console.log(marks)

// Added to begin 
marks.unshift(250)
console.log(marks)

console.log(marks.indexOf(100))
console.log(marks.includes(120))

console.log("----------------")

for(let i = 0 ; i < marks.length ; i++)
{
    console.log(marks[i])
}

console.log("----------------")

var sum = 0
for(let k = 0 ; k < marks.length ; k++)
{
    sum = sum + marks[k]
}
console.log(sum)

console.log("----------------")

// reduce filter map
let total = marks.reduce((sum , mark) => sum + mark , 0)
console.log(total)

console.log("----------------")

var scores = [12,13,14,16]
// create new array with even numbers of scores array [12 , 14 ,16]
// with 3 array sum them[12 , 14 , 16]
var evenScores = []
for(let i = 0 ; i < scores.length ; i++)
{
    if(scores[i] %2 == 0)
    {
            evenScores.push(scores[i])
    }
}
console.log(evenScores)

// Filter usage
let newFilterEvenScores = scores.filter(score => score %2 == 0)
console.log(newFilterEvenScores) // [12 , 14 , 16]

// Map usage
let mappedArray = newFilterEvenScores.map(score => score*3) // [12 , 14 , 16] => [36 , 42 , 48]
console.log(mappedArray)

// with 3 array sum them[36 , 42 , 48]
let totalValue = mappedArray.reduce((sum , val) => sum+val,0)
console.log(totalValue)

var scores1 = [12 , 13 , 14 , 16]
let allOperations = scores1.filter(score => score %2 == 0).map(score => score*3).reduce((sum , value) => sum + value , 0)
console.log(allOperations)

console.log("---------------")

// Sort for the String variables
let fruits = ["banana" , "mango" , "apple" , "watermelon" , "pineapple"]


console.log(fruits.sort())
console.log(fruits.reverse())

// Sort for the int variables
let numbers = [13 , 15 , 18 , 12 , 11 , 3]
numbers.sort(function(a,b)
{
    return a-b
})
console.log(numbers)

// Same operation with easy way
let numbers2 = [13 , 15 , 18 , 12 , 11 , 3]
console.log(numbers2.sort((a,b) => a-b))