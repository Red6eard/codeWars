/*
Дан массив целых чисел, вернуть новый массив, в котором каждое значение удвоено.
Например:
[1, 2, 3] --> [2, 4, 6]


function maps(x){
  let newArr = x.map((el) => el * 2);
  return newArr;
};
*/
let maps = (x) => x.map((el) => el * 2);

console.log(maps([2,3,5]))