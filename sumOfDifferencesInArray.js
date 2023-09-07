// Ваша задача— просуммировать разности между последовательными парами массива в порядке убывания.

// Пример

// [2, 1, 10]-- > 9
// В порядке убывания: [10, 2, 1]

// Сумма: (10– 2) + (2– 1) = 8 + 1 = 9

// Если массив пуст или содержит только один элемент, результат должен быть 0(Ничего в Haskell, Нет в Rust).

let array = [5,7,3,8,15];


const sumOfDifferences = (arr) => {
  if (arr.length <= 1) {
    return 0
  } else {
    let res = 0;
    arr.sort((a,b) => b - a);
    for (let i = 0; i < arr.length; i++) {
      if (i + 1 < arr.length) {
      res += arr[i] - arr[i + 1];
      }
      //console.log(res);
    }
      return res;
  }
};

console.log(sumOfDifferences(array));