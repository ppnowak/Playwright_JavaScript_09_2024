const constVariable = "ABC";
let letVariable = "DEF";
// var varVariable = "GHI";

{
    const constVariable = 987;
    letVariable = 567;
    console.log({ constVariable, letVariable })
}

console.log({ constVariable, letVariable })