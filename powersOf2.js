/*
Завершите функцию, которая принимает в качестве входных данных неотрицательное целое число nи возвращает список всех степеней числа 2с показателем степени от 0до n(включительно).
Примеры:
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

let powersOfTwo = (n) => {
    let arr = []
    for (let i = 0; i <= n; i++){
        arr.push(2 ** i);
        };
    return arr
    };

console.log(powersOfTwo(3));

