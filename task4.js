// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения. 

// Верфи и корабли должны создаваться с помощью функций-конструкторов.

function Shipyard() {
   this.color = function () {
      console.log("Красим корабль")
   }
}

function MotorShipyard() {
   this.buildShip = function (engine_power, body_material) {
      console.log("motor ship building")
      return new MotorShip(engine_power, body_material)
   }
   this.repairs = function () {
      console.log("чиним моторный корабль")
   }
   this.change = function () {
      console.log("меняем моторный корабль")
   }
}
function SailingShipyard() {
   this.buildShip = function (saling_amount, saling_material) {
      console.log("saling ship building")
      return new SailingShip(saling_amount, saling_material)
   }
   this.repairs = function () {
      console.log("чиним парусный корабль")
   }
   this.change = function () {
      console.log("меняем парусник")
   }
}

SailingShipyard.prototype = new Shipyard()
MotorShipyard.prototype = new Shipyard()

function MotorShip(engine_power, body_material) {
   this.body_material = body_material
   this.engine_power = engine_power
}
function SailingShip(saling_amount, saling_material) {
   this.saling_amount = saling_amount
   this.saling_material = saling_material
}

MotorShip.prototype = new MotorShipyard()
SailingShip.prototype = new SailingShipyard()

const motorShipyard = new MotorShipyard()
const sailingShipyard = new SailingShipyard()

const motor1 = motorShipyard.buildShip(100, "Палки и не важно что")
const sailing1 = sailingShipyard.buildShip(6, 45)
console.log(motor1)
console.log(sailing1)

motor1.repairs()
sailing1.repairs()

motor1.color()
sailing1.color()

motor1.change()
sailing1.change()