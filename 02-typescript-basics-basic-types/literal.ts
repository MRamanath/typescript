function combine(
    n1: number | string,
    n2: number | string,
    resultConversion: 'as-number' | 'as-string' // literal type
) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    return result;

    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else if (resultConversion === 'as-string') {
    //     return result.toString();
    // }
}

const combinedAges = combine(23, 34, 'as-number');
console.log(combinedAges);

const combinedAges2 = combine('23', '34', 'as-number');
console.log(combinedAges2);

const combinedNames = combine('Ramanath', 'Mandal', 'as-string');
console.log(combinedNames);