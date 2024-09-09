// math.js
export class Calculator {

    constructor(initialValue) {
        this.result = initialValue;
    }

    getResult() {
        return this.result;
    }

    add(a) {
        this.result += a;
        return this.result;
    }
    
    div(a) {
        this.result /= a;
        return this.result;
    }

}

// some.test.js
import { Calculator } from './math.js'

test("Check if sum is proper", () => {
    const calc = new Calculator(5);
    expect(calc.add(10)).toBe(15);
});

test("Check if div is proper", () => {
    const calc = new Calculator(5);
    expect(calc.div(2)).toBe(2.5);
});