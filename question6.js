// Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
// for his unique way of speaking. He often reverses the order of words in his
// sentences. For example, instead of saying "I am home" he might say "Home
// am I" Design a function that takes a sentence as input and returns a new
// sentence with the words reversed in the same order that Master Yoda would
// use.
function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.reverse();
    const yodaSentence = reversedWords.join(' ');
    
    return yodaSentence;
}
console.log(reverseWords("I am home"));