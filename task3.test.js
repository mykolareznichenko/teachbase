describe("Фильтрация массива по длине строк::", () => {
   it("обычные условия", () => {
      arr = ['orange', 'apple', 'banana', '']
      assert.deepEqual(filterByLength(arr, 0, 5), ['apple', ''])
   })
   it("обычные условия со вторым аргументом", () => {
      arr = ['orange', 'apple', 'banana', '']
      assert.deepEqual(filterByLength(arr, 1, 5), ['apple'])
   })
   it("обычные условия без второго и третьего аргумента", () => {
      arr = ['orange', 'apple', 'banana', '']
      assert.deepEqual(filterByLength(arr), ['orange', 'apple', 'banana', ''])
   })
   it("передаём пустой массив", () => {
      arr = []
      assert.deepEqual(filterByLength(arr), [])
   })
})