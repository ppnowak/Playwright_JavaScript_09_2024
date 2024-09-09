// math.js
export const sum = (a, b) => a + b;
export const div = (a, b) => a / b;


// some.test.js
import { sum, div } from './math.js'

test("Check if sum is proper", () => {
    expect(sum(5, 10)).toBe(15);
});

test("Check if div is proper", () => {
    expect(div(5, 2)).toBe(2.5);
});