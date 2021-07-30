describe("Заказ билетов::", () => {
   const ticketWindowTest = new TicketWindow()
   it("проверка добавления собатия", () => {
      ticketWindowTest.createEvent('Concert', 500)
      ticketWindowTest.createEvent('Concert', 1000)
      ticketWindowTest.createEvent('Opera', 1000)
      assert.deepEqual(ticketWindowTest.events.eventsList, { Concert: 500, Opera: 1000 })
   })
   it("проверка покупки билетов", () => {
      ticketWindowTest.buyTicket('Concert')
      ticketWindowTest.buyTicket('Concert')
      ticketWindowTest.buyTicket('Opera')
      ticketWindowTest.buyTicket('Opera')

      assert.deepEqual(ticketWindowTest.events.orders, [{ id: 100000, cost: 500 },
      { id: 100001, cost: 500 },
      { id: 100002, cost: 1000 },
      { id: 100003, cost: 1000 }])
      assert.equal(ticketWindowTest.events.cashbox, 3000)
   })
   it("проверка покупки билетов на ложное событие", () => {
      ticketWindowTest.buyTicket('Footbal')

      assert.deepEqual(ticketWindowTest.events.orders, [{ id: 100000, cost: 500 },
      { id: 100001, cost: 500 },
      { id: 100002, cost: 1000 },
      { id: 100003, cost: 1000 }])
      assert.equal(ticketWindowTest.events.cashbox, 3000)
   })
   it("проверка возврата билетов", () => {
      ticketWindowTest.returnTicket('100001')
      ticketWindowTest.returnTicket('100002')
      assert.deepEqual(ticketWindowTest.events.orders, [{ id: 100000, cost: 500 }, { id: 100003, cost: 1000 }])
      assert.equal(ticketWindowTest.events.cashbox, 1500)
   })
   it("проверка возврата ложного билета", () => {
      ticketWindowTest.returnTicket('100011')
      assert.deepEqual(ticketWindowTest.events.orders, [{ id: 100000, cost: 500 }, { id: 100003, cost: 1000 }])
      assert.equal(ticketWindowTest.events.cashbox, 1500)
   })
})