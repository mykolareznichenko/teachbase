// ticketWindow.createEvent('Concert', 500) создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') 
/* Добавляем сумму за билет в кассу, возвращаем
случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456')
/* Возвращаем билет, если в системе такой id записан
как проданный, он должен быть удален из списка проданных и из кассы должна быть
вычтена соответствующая его цене сумма */
function TicketWindow() {
   const events = {
      orders: [],
      cashbox: 0,
      eventsList: {}
   }
   let orderID = 100000

   this.getEvents = () => console.log(events)

   this.createEvent = (eventName, eventCost) => {
      if (!Object.keys(events.eventsList).length) {
         events.eventsList[eventName] = eventCost
         return
      }
      Object.keys(events.eventsList).map(key => {
         if (key === eventName) return

         events.eventsList[eventName] = eventCost
      })
   }

   this.buyTicket = (eventName) => {
      Object.keys(events.eventsList).map(key => {
         if (key === eventName) {
            events.orders.push({ id: orderID, cost: events.eventsList[eventName] })
            events.cashbox = events.cashbox + events.eventsList[eventName]
            orderID++
         }
      })
   }

   this.returnTicket = (orderID) => {
      const idIndex = events.orders.map(order => order.id).indexOf(+orderID)
      console.log(idIndex)
      if (idIndex === -1) return
      events.cashbox = events.cashbox - events.orders[idIndex].cost
      events.orders.splice(idIndex, 1)
   }
}

const ticketWindow = new TicketWindow()

ticketWindow.createEvent('Concert', 500)
ticketWindow.createEvent('Concert', 1000)
ticketWindow.createEvent('Opera', 1000)

ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Concert')
ticketWindow.buyTicket('Opera')
ticketWindow.buyTicket('Opera')

ticketWindow.returnTicket('100001')
ticketWindow.returnTicket('100002')
ticketWindow.returnTicket('100011')

ticketWindow.getEvents()


