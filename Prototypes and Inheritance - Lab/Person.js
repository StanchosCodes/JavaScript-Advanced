function createPerson(firstName, lastName) {
    return {
            firstName: firstName,
            lastName: lastName,

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        set fullName(value) {
            let firstAndLastName = value.split(' ');

            this.firstName = firstAndLastName[0];
            this.lastName = firstAndLastName[1];
        }
    };
}

let person = createPerson("Peter", "Ivanov");

console.log(person.fullName); //Peter Ivanov

person.firstName = "George";

console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla