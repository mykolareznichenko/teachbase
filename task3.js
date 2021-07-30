// Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:

// const fruits = ['orange', 'apple', 'banana', '']

// filterByLength(fruits, 0, 5) // ['apple', '']

function filterByLength(arr, minLength = 0, maxLength = Infinity) {
   return arr.filter(word => minLength <= word.length && word.length <= maxLength)
}

console.log(filterByLength(['123', '1234', '12345', '12', '1', '123456', ''], 0, 3))
console.log(filterByLength(['123', '1234', '12345', '12', '1', '123456', ''], 1, 5))
