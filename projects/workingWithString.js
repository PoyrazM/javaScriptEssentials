let day = "Friday " // String has a one space 
console.log(day.length) // => 7
let subStringDay = day.slice(0,4)
console.log(subStringDay) // Frid
console.log(day[0]) // F


let splittedDay = day.split("i")
console.log(splittedDay) // Output : 'Fr' 'day '
console.log(splittedDay[1].length) // Output : 4
console.log(splittedDay[1]) // Output : day
console.log(splittedDay[1].trim().length) // Be deleted spaces area

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate - date)
console.log(diff)
diff.toString()

let newQuote = day + "is Enjoyable day" + day
console.log(newQuote)
let val = newQuote.indexOf("day" , 4)
console.log(val)

// be checked how many day keywords in the variable

let count = 0
let val2 = newQuote.indexOf("day")

while(val2 !== -1)
{
    count ++
    val2 = newQuote.indexOf("day" , val2 + 1)
}
console.log(count)


