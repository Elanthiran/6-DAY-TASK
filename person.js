//3.Write a “person” class to hold all the details.

class Person{
    constructor(PersonName = "Elanthiran", PersonAge = 22, PersonJob = "IT") {
        this.PersonName = PersonName;
        this.PersonAge = PersonAge;
        this.PersonJob = PersonJob;
    }
    getaddress()
    {
        return this.address;
    }
    setaddress(address)
    {
        return this.address;
    }
}
let Person1 = new Person()
Person1.address=(`113,Kavalan street,Dj colony,Anna nagar`)
console.log(Person1)
