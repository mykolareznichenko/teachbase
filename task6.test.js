describe("Калькулятор::", () => {
   const testCalc = new Calc()
   it("проверка добавления операции", () => {
      sum = (a, b) => a + b
      testCalc.addOperation('+', sum)
      assert.equal(testCalc.operationList['+'], sum)
   })
   it("проверка существующих операции", () => {
      assert.equal(testCalc.operation('2 + 2'), 4)
   })
   it("проверка не существующей операции", () => {
      assert.equal(testCalc.operation('2 - 2'), "Операция не найдена")
   })
   it("проверка истории операций", () => {
      assert.deepEqual(testCalc.history(), [{ operation: "+", operands: ["2", "2"] }])
      testCalc.clearHistory()
      assert.deepEqual(testCalc.history(), [])
   })
})