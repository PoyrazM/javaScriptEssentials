// Object is collection of properties

let person = 
{
    firstName : 'Mertcan' ,
    lastName  : 'Poyraz'  ,
    age       :     23    ,
    fullName : function()
    {
        return console.log(this.firstName + ' ' + this.lastName)
    }
}

person.fullName()

console.log(person.firstName + " " + person.lastName)

console.log(person['lastName']) 

person.firstName = 'Darth Vader'
console.log(person.firstName)

person.gender = 'Male'
console.log(person)

delete person.gender
console.log(person)

console.log('gender' in person)
console.log('firstName' in person)

// Print all the values of the JavaScript objects
for(let key in person)
{
    console.log(person[key])
}
