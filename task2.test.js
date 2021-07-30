describe("Фильтрация массива по убыванию::", () => {
   it("обычные условия", () => {
      arr = [-20, -10, 0, 10, 20, 30]
      assert.deepEqual(sortDesc(arr), [30, 20, 10, 0, -10, -20])
   })
   it("передаём пустой массив", () => {
      arr = []
      assert.deepEqual(sortDesc(arr), [])
   })
})