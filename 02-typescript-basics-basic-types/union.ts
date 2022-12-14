function combine(n1: number | string, n2: number | string) {
    let result: number | string;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result =  n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combinedAges = combine(23, 34);
console.log(combinedAges);

const combinedNames = combine('Ramanath', 'Mandal');
console.log(combinedNames);