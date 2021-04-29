// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = {
   firstName: '',
   lastName: '',
   set fullName(fullName) {
      [this.firstName, this.lastName] = fullName.split(" ")
   },
   get fullName() {
      return this.firstName + " " + this.lastName
   }
}

human.fullName = "Akakiy Starozubov"
console.log(human.firstName)
console.log(human.lastName)
console.log(human.fullName)