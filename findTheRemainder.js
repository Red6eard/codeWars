/*
Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее значение.
Деление на ноль должно вернуть NaN.
Примеры:
  n = 17
m = 5
result = 2(remainder of `17 / 5`)

n = 13
m = 72
result = 7(remainder of `72 / 13`)

n = 0
m = -1
result = 0(remainder of `0 / -1`)

function remainder(n, m) {
  if (n > m) {
    return n % m;
  } else {
    return m % n;
  };
};
*/
// перепишем на тернарнике
let remainder = (n, m) => n > m ? n%m : m%n;

console.log(remainder(13,5))