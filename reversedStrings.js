/* Дополните решение так, чтобы оно перевернуло переданную в него строку.
Пример:
'world' => 'dlrow'
'word' => 'drow'
*/

let solution = (str) => str.split("").reverse();

console.log(solution("world"));

// делаем из слова массив методом split()
// переворачиваем массив методом reverse()