// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

// Есть следующее расширение объектов: 
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function() {},
//   sleep: function() {},
//   callFriend: function() {},
//   writeReport: function() {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {}
// };

let Human = function (name, lastName, phoneNumber, location) {
   this.name = name
   this.lastName = lastName
   this.phoneNumber = phoneNumber
   this.location = location
   this.eat = function () {
      return 'eat'
   }
   this.sleep = function () {
      return 'sleep'
   }
   this.callFriend = function () {
      return 'callFriend'
   }
}

let Employee = function (position, baseSalary, salaryCurrency, department, startDate, endDate) {

   this.position = position
   this.baseSalary = baseSalary
   this.salaryCurrency = salaryCurrency
   this.department = department
   this.startDate = startDate
   this.endDate = endDate
   this.writeReport = function () {
      return 'write report'
   }
}

let CurrentEmployee = function () {
   this.retire = function () {
      return 'retire'
   }
   this.startVacation = function () {
      return 'start vacation'
   }
   this.organizeMeeting = function () {
      return 'organize meeting'
   }
}

Employee.prototype = new Human()
CurrentEmployee.prototype = new Employee()

let person = new CurrentEmployee()
