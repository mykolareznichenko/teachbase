// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
   {
      firstName: 'Alex',
      lastName: 'Smith',
      age: 54,
      salary: 10000,
      position: 'Architect'
   },
   {
      firstName: 'Gustav',
      lastName: 'Andersen',
      age: 31,
      salary: 5000,
      position: 'Software engineer'
   },
   {
      firstName: 'Liz',
      lastName: 'Taylor',
      age: 20,
      salary: 7000,
      position: 'Manager'
   }
]

const averageSalary = employees.reduce(((acc, employee) => acc + employee.salary), 0) / employees.length
console.log(averageSalary)

const filterEmployees = employees.filter((employee) => employee.salary > 4500 && employee.age > 25)
console.log(filterEmployees)

const sortEmployees = employees.sort((a, b) => a.salary - b.salary)
console.log(sortEmployees)
