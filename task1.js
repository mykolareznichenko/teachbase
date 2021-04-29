// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой 
// { word: 'smth', length: 1, isCapitalized: false}

function wordAnalysis(word) {
   return {
      word,
      length: word.length,
      isCapitalized: word[0] === word[0].toUpperCase()
   }
}

console.log(wordAnalysis('smth'))
console.log(wordAnalysis('Smth'))