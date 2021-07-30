// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:  
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

function cache() {
   const cacheList = []

   return (a, b) => {
      let result

      cacheList.map(cache => {
         const [firstArg, secondArg, pow] = cache

         if (firstArg === a && secondArg === b) {
            result = { value: pow, fromCache: true }
         }
      })
      if (result) return result

      const pow = a ** b
      result = { value: pow, fromCache: false }
      cacheList.push([a, b, pow])
      return result
   }
}

const calculate = cache()
console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}