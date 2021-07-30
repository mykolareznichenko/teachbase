describe("Кэширование::", () => {
   it("обычные условия", () => {
      const testCalc = cache()
      assert.deepEqual(testCalc(3, 3), { value: 27, fromCache: false })
      assert.deepEqual(testCalc(2, 10), { value: 1024, fromCache: false })
      assert.deepEqual(testCalc(2, 10), { value: 1024, fromCache: true })
   })
})