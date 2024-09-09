const person = {
    firstName: 'Piotr',
    lastName: 'Nowak',
    address: {
        street: 'Główna 5',
        zipCode: '11-111'
    }
}

console.log(person)

const { firstName, lastName, address, unknownProperty } = person;
const { street } = address;
console.log("Person name is", firstName, lastName, ",", street, unknownProperty);

{
    const { firstName, lastName, address: { street } } = person;
    console.log("Person name is", firstName, lastName, ",", street);
}

const { firstName: name, lastName: surname } = person;
console.log("Person name is", name, surname);

function printPerson(person) {
    console.log("Person name is", person.firstName, person.lastName, ",", person.address.street);
}
printPerson(person);

function printPerson2({ firstName, lastName, address: { street }}) {
    console.log("2 Person name is", firstName, lastName, ",", street);
}
printPerson2(person);

{
    const array = ["Piotr", "Nowak", "Główna 5"]
    const [name, surname, street] = array;
    console.log(`His name is ${name} ${surname} and he lives in ${street} street`);
}

{
    const array = ["Piotr", "Nowak", "Główna 5"]
    const [name, ...remainingArguments] = array;
    console.log(`His name is ${name}, we don't care about the rest`, remainingArguments);
}