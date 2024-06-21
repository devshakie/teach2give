// Design a function that reverses the digits of an integer. For example, 50
// should become 5 and -12 should become -21.

function reverseInteger(n) {
    const isNegative = n < 0;
    n = Math.abs(n);
    const reversedStr = n.toString().split('').reverse().join('');
    let reversedInt = parseInt(reversedStr,10);

    if (isNegative) {
        reversedInt = -reversedInt;
    } 

    return reversedInt;



}
console.log(reverseInteger(67));
console.log(reverseInteger(50));
console.log(reverseInteger(-12));