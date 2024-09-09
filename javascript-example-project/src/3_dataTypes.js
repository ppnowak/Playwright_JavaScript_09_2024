let integer = 123;
let float = 1.234;
let string = "abc";
let string2 = 'abc';
let string3 = `abc`;

let bool = true; // false
let object = {
    param1: 'value1',
    param2: {
        key: 'value'
    },
    array: [
        "a", "b", "c"
    ],
    func: () => console.log("Hello from object")
}
console.log(object);
object.func();

let array = [1, 2, "Piotr", "Nowak"];

let date = new Date();
console.log(date);

// Definiowanie funkcji
function myFunction1(arg) {
    console.log("myFunction1", arg);
}
myFunction1("hi");

const myFunction2 = (arg) => {
    console.log("myFunction2", arg);
}
myFunction2("hi");

let myFunction3 = myFunction1;
myFunction3("hello");
myFunction3 = myFunction2
myFunction3("hello");

((arg) => {
    console.log("Immediate function", arg);
})("immediate argument")