// Design a function that takes a string or sequence of characters as input and
// returns the character that appears most frequently.
// //Eg 11189 => '1'
// //hello => l
function frequentCharacter(input) {
    const count = {};
    for (let char of input) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

        let maxCount = 0;
        let mostFrequentChar = '';
        for (let char in count) {
            if (count[char] > maxCount) {
                maxCount = count[char];
                mostFrequentChar = char;
            } else {
                maxCount = 1;
            }
    }
    return mostFrequentChar;
}
console.log(frequentCharacter('heyy'));
console.log(frequentCharacter('11189'));
console.log(frequentCharacter('hello'));