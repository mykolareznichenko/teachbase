describe("СУММА ПОЛОЖИТЕЛЬНЫХ ЭЛЕМЕНТОВ МАССИВА::", () => {
   it("обычные условия", () => {
      arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
      assert.deepEqual(sumOfPositive(arr), {
         count: 5,
         sum: 357,
      })
   })
   it("нет ни одного положительного", () => {
      arr = [-91, -93, -45, -34, -42]
      assert.deepEqual(sumOfPositive(arr), {
         count: 0,
         sum: 0,
      })
   })
   it("передаём пустой массив", () => {
      arr = []
      assert.deepEqual(sumOfPositive(arr), {
         count: 0,
         sum: 0,
      })
   })
   it("ничего не передаём в функцию", () => {
      assert.equal(sumOfPositive(), "Передайте пожалуйста массив")
   })
   it("передаём не массив", () => {
      assert.equal(sumOfPositive({}), "Передайте пожалуйста массив")
   })
})