arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

function sumOfPositive(arr) {
   if (!Array.isArray(arr)) return "Передайте пожалуйста массив"
   return arr.reduce((sum, item) => {
      if (item > 0) {
         return { count: sum.count + 1, sum: sum.sum + item }
      } else return sum
   }, { count: 0, sum: 0 })
}

sumOfPositive(arr)