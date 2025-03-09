/* Дополните решение так, чтобы оно перевернуло переданную в него строку.
Пример:
'world' => 'dlrow'
'word' => 'drow'
*/

let solution = (str) => str.split("").reverse().join("");

console.log(solution("world"));

// делаем из слова массив методом split()
// переворачиваем массив методом reverse()
// вместо split() можно использовать спред оператор [...str]

