/*
Объект/класс уже создан под названием MrFreeze. Отметьте этот объект как замороженный, чтобы в него нельзя было вносить никаких других изменений.
*/
//создаём объект
let MrFreeze = {
  name: 'Mr. Freeze',
  age: 1000,
};
console.log(MrFreeze)
//замораживаем объект
Object.freeze(MrFreeze);
// проверяем заморозку
console.log(Object.isFrozen(MrFreeze));