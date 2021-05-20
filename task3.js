// Калькулятор

// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract

// Пример: 
// const calculator = new Calc()

// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5

// Также, он должен хранить историю всех операций и выводить ее по запросу:

// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */

// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

function Calc() {
   let operationList = []
   let operationHistory = []

   this.operation = (operation) => {
      let result = "Операция не найдена"
      const [operand1, operator, operand2] = operation.split(' ')
      operationList.map((operation) => {
         if (operation.operator === operator) {
            result = operation.func(parseFloat(operand1), parseFloat(operand2))
            operationHistory.push({ operation: operator, operands: [operand1, operand2] })
         }
      })
      return result
   }

   this.addOperation = (operator, func) => {
      operationList.push({ operator, func })
   }

   this.history = () => {
      return operationHistory
   }

   this.clearHistory = () => {
      operationHistory = []
   }
}

const calculator = new Calc()

console.log(calculator.operation('2 + 5'))
calculator.addOperation('+', (a, b) => a + b)
console.log(calculator.operation('2 + 5'))

console.log(calculator.operation('5 - 5'))
calculator.addOperation('-', (a, b) => a - b)
console.log(calculator.operation('5 - 5'))

console.log(calculator.operation('5 * 5'))
calculator.addOperation('*', (a, b) => a * b)
console.log(calculator.operation('5 * 5'))

console.log(calculator.operation('3 ** 2'))
calculator.addOperation('**', (a, b) => a ** b)
console.log(calculator.operation('3 ** 2'))

console.log(calculator.history())
calculator.clearHistory()
console.log(calculator.history())

