// ticketWindow.createEvent('Concert', 500) создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') 
/* Добавляем сумму за билет в кассу, возвращаем
случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456')
/* Возвращаем билет, если в системе такой id записан
как проданный, он должен быть удален из списка проданных и из кассы должна быть
вычтена соответствующая его цене сумма */
function TicketWindow() {
   this.events = {
      orders: [],
      cashbox: 0,
      eventsList: {}
   }
   let orderID = 100000

   this.createEvent = (eventName, eventCost) => {
      if (!Object.keys(this.events.eventsList).length) {
         this.events.eventsList[eventName] = eventCost
         return
      }
      Object.keys(this.events.eventsList).map(key => {
         if (key === eventName) return

         this.events.eventsList[eventName] = eventCost
      })
   }

   this.buyTicket = (eventName) => {
      Object.keys(this.events.eventsList).map(key => {
         if (key === eventName) {
            this.events.orders.push({ id: orderID, cost: this.events.eventsList[eventName] })
            this.events.cashbox = this.events.cashbox + this.events.eventsList[eventName]
            orderID++
         }
      })
   }

   this.returnTicket = (orderID) => {
      const idIndex = this.events.orders.map(order => order.id).indexOf(+orderID)
      console.log(idIndex)
      if (idIndex === -1) return
      this.events.cashbox = this.events.cashbox - this.events.orders[idIndex].cost
      this.events.orders.splice(idIndex, 1)
   }
}

const ticketWindow = new TicketWindow()
