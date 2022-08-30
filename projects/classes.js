module.exports = class Person
{

    age = 23
    get location()
    {
        return "Turkey"
    }

    constructor(firstName , lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName()
    {
        return console.log(this.firstName + " " + this.lastName)
    }

}
/*
let person = new Person("Mertcan" , "Poyraz")
let person1 = new Person("Peter" , "Parker")
let person2 = new Person("Iron" , "Man")

console.log(person.age)
console.log(person.location)

person.fullName()
person1.fullName()
person2.fullName()
*/