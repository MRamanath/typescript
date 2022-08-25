function add(number1: number, number2: number, showResult: boolean, phrase: string): any {
    const result = number1 + number2;
    if (showResult) {
        console.log(phrase + ': ' + result);
    } else {
        return result;
    }
}

// const num1 = 123;
// const num2 = 34.12;

let num1: number, num2: number; // type assignment
num1 = 123;
num2 = 34.12;

const printResult = true;
const phrase = "Result is";
add(num1, num2, printResult, phrase);