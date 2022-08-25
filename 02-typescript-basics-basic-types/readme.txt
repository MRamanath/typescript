core types
________________

1) number Ex. 0, 1, -2, 3.678, 901

2) string Ex. '1', "34", "hello", "hi"

3) boolean Ex. true, false

4) object Ex. { age: 30 }

5) array Ex. [1, 2, 3, 4, 5,]
_________________________________

6) tuple Ex. [1, 2, 3]

7) enum Ex. enum { NEW, OLD }

8) any Ex. *
_________________________________

9) union Ex. let result: number | string;

10) literal Ex. let a: 'as-number' | 'as-string';

11) type aliases custom type
Ex. type Combinable = 'number' | 'string';
    type ConversionDescriptor = 'as-number' | 'as-string';

12) function return type
Ex. function printResult(num: number): void {
    console.log('Result is ' + num);
}

13) function as types:
Ex. let combineValues: (m: number, n: number) => number; // function type

14) function type & callback

15) unknown type:
Ex: let userInput: unknown;

16) never type:
Ex: function generateError(message: string, errorCode: number): never {
    throw { message, errorCode };
}
