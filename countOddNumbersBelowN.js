/*
Дано число n, верните количество положительных нечетных чисел ниже n. ЛЕГКО!

Примеры (Вход -> Выход)

7 - > 3(because odd numbers below 7 are[1, 3, 5])
15 - > 7(because odd numbers below 15 are[1, 3, 5, 7, 9, 11, 13])

let oddCount = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    };
  };
  return arr.length;
};
не прошло все проверки
*/

// новое решение:
function oddCount(n) {
  // your code here
  let count = Math.floor(n / 2);
  return count
};

console.log(oddCount(7));
// создать пустой массив
// добавить в него нечетные числа от 0 до n
// вернуть длинну этого массива