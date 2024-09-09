// Wykonać kod, który dla arraya z wartościami od 1 do 10 wykona pętlę która wyświetli tylko parzyste wartości
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [    2,    4,    6,    8,    10 ] -> console.log

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("Solution #1", numbers[i]);
    }
}
console.log();

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log("Solution #2", number);
    }
}
console.log();

numbers.filter(num => num % 2 === 0).forEach(num => console.log("Solution #3", num));