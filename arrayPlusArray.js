/*
Я новичок в программировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Буду признателен за помощь.
P.S. Каждый массив содержит только целые числа. Вывод — тоже число.
*/

function arrayPlusArray(arr1, arr2) {
  let sumArr1 = arr1.reduce((sum,el)=>sum+el,0);
  let sumArr2 = arr2.reduce((sum,el)=>sum+el,0);
  return sumArr1 + sumArr2;
};

let a1 = [2,4,6];
let a2 = [1,3,5]


console.log(arrayPlusArray(a1,a2));