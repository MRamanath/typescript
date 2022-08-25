const userInput = '';

const storedData = userInput || 'DEFAULT';

const storedData1 = userInput ?? 'DEFAULT'; // null coalescing operator

console.log(storedData1);
console.log(storedData);
