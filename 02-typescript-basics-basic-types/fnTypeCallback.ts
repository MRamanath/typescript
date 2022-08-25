function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result is ' + num);
}

printResult(add(23, 45));

function addAndHandle(n1: number, n2: number, callback: (n: number) => void) {
    const result = n1 + n2;
    callback(result);
}

// let combineValues: Function;
let combineValues: (m: number, n: number) => number; // function type
combineValues = add;

console.log(combineValues(45, 34));

addAndHandle(55, 45, (result) => {
    console.log(result + 34);
})