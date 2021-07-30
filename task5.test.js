describe("MoneyBox::", () => {
   it("обычный тест", () => {
      const testBox = new MoneyBox();
      assert.equal(testBox.getAmount(), 0)
      assert.equal(testBox.addCoin(), undefined)
      assert.equal(testBox.addCoin(), undefined)
      assert.equal(testBox.getAmount(), 2)
   })
   it("тест с попыткой поменять privatCoin в ручную за пределами MoneyBox()", () => {
      const testBox2 = new MoneyBox();
      privatCoin = 4
      testBox2.privatCoin = 4
      assert.equal(testBox2.getAmount(), 0)
   })
})