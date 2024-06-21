// Design a function that determines whether a given string is a pangram. A
// pangram is a sentence or phrase containing every letter of the alphabet at
// least once. Punctuation and case are typically ignored. For example, the
// string "The quick brown fox jumps over the lazy dog" is a pangram, while
// "Hello, world!" is not.
function isPangram(input) {
    const normalizedInput = input.toLowerCase().replace(/[^a-z]/g, '');
    const charSet = new Set(normalizedInput);
    return charSet.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello, world!"));
