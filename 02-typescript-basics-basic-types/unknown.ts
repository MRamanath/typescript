let userInput: unknown; // unknown vs any // unknown is more restrictive than any
let userName: string;

userInput = 45;
userInput = 'astring';

if (typeof userInput === 'string') {
    userName = userInput;
}

