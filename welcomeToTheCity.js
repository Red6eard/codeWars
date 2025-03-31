/*
Создайте метод, который принимает в качестве входных данных имя, город и штат для приветствия человека.Обратите внимание, что это nameбудет массив, состоящий из одного или нескольких значений, которые должны быть объединены вместе с одним пробелом между ними, а длина массива nameв тестовых случаях будет меняться.
Пример:
  ['John', 'Smith'], 'Phoenix', 'Arizona'
Этот пример вернет строкуHello, John Smith!Welcome to Phoenix, Arizona!


function sayHello(name, city, state) {
  return `${name.join(' ')}!Welkome to ${city}, ${state}!`
}
*/
// перепишем на стрелочную:

let sayHello = (name, city, state) => `Hello, ${name.join(' ')}!Welkome to ${city}, ${state}!`;

console.log(sayHello(['Vadim', 'Sergeevich'], 'Tula', 'Russia'));