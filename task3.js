// Написать функцию для реверсии слова не используя встроенные методы

function reverseWord(word) {
   let reverse_word = ''
   for (let i = (word.length - 1); i >= 0; i--) {
      reverse_word += word[i]
   }
   return reverse_word
}

console.log(reverseWord("1234"))
console.log(reverseWord("aassdd"))
console.log(reverseWord("asdsa"))