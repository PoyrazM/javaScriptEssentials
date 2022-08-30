const Person = require("./classes")
class Pet extends Person
{
    get location()
    {
        return "Turkey"
    }
    constructor(firstName , lastName)
    {
        // Call parent class constructor
        super(firstName , lastName)
    }
}

let pet = new Pet("Child","Class")
pet.fullName()
console.log(pet.location)