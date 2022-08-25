function generateError(message: string, errorCode: number): never {
    throw { message, errorCode };
}

const result = generateError('An Error occurred!', 500);
console.log(result);