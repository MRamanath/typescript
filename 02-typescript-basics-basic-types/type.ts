type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string' // literal type

function combine(
    n1: Combinable,
    n2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    return result;
}

const combinedAges = combine(23, 34, 'as-number');
console.log(combinedAges);

const combinedAges2 = combine('23', '34', 'as-number');
console.log(combinedAges2);

const combinedNames = combine('Ramanath', 'Mandal', 'as-string');
console.log(combinedNames);