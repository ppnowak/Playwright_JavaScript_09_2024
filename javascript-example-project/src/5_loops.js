for (let i = 0; i < 10; i++) {
    console.log("for loop 1 ", i);
}

for (let i = 15; i % 10 !== 0; i +=1 ) {
    console.log("for loop 2", i);
}

let count = 0;
while(count < 10) {
    console.log(++count);
}

let number = 0;
do {
    console.log("do-while", number++);
} while (number < 5);

let array = [1, 2, 3, 4, 5];
array.forEach((currentValue, currentIndex, wholeArray) => {
    console.log("array", currentValue, currentIndex, wholeArray)
});

array = [
    { position: 1 },
    { position: 2 }
]
for (const currentValue of array) {
    console.log("for", currentValue)
}