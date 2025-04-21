/*
Создайте класс Ball. Объекты Ball должны принимать один аргумент для «типа мяча» при создании экземпляра.

Если аргументы не указаны, объекты мяча должны создаваться с «типом мяча» «обычный».

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

*/

let Ball = function(ballType) {
  this.ballType = ballType||'regular';
};
const ball1 = new Ball();
const ball2 = new Ball('super')
console.log(ball1.ballType);
console.log(ball2.ballType);