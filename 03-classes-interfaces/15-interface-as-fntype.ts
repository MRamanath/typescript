type AddFn = (n1: number, n2: number) => number;

let add: AddFn;

add = (a: number, b: number): number => {
    return a + b;
}

interface SubFn {
    (n1: number, n2: number): number;
}

let sub: SubFn;

sub = (a: number, b: number): number => {
    return a - b;
}