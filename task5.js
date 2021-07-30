
// Замыкания могут применяться для простой реализации инкапсуляции, т.е. для того чтобы скрыть реализацию какой-то функциональности.

// Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//     addCoin - Добавляет 1 монету в копилку 
//     getAmount - Возвращает количество монет в копилке 
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

// Пример:  
// const box = new MoneyBox();

// box.getAmount(); // 0
// box.addCoin();
// box.addCoin();
// box.getAmount(); // 2

function MoneyBox() {
   let privatCoin = 0
   this.addCoin = () => {
      privatCoin++
   }
   this.getAmount = () => {
      return privatCoin
   }
}

const box = new MoneyBox();

privatCoin = 4
box.privatCoin = 4
box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2