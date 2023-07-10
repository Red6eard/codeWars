// // // Суммируйте все числа заданного массива(cq.list), кроме самого высокого и самого низкого элемента(по значению, а не по индексу!).

// // Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением.

// // Помните о проверке ввода.
// Если вместо массива задано пустое значение ( null, None, Nothing и т. д.), или данный массив является пустым списком или списком только с 1 элементом, вернуть 0.
/*function sumArray(array) {
  if(array === null || array.length <= 2){
    console.log(0)
  //}else if (array.length <= 1) {
  //  return 0
  }else {
  const sortedArr = array.sort((a,b) => b-a)
  const min = sortedArr[array.length-1];
  const max = sortedArr[0];
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] === min 
    || 
    array[i] === max){
      continue
  } else{
  sum += array[i];
  console.log(sum);
  }
    };
  };
};
sumArray([6,2,1,8,10])

console.log([3,1,6,1,10,8,10].sort((a,b)=>b-a))
*/
function sumArray(array) {
  if (array === null || array === undefined) {
    return 0
  } else if (array.length <= 2) {
    return 0
  }
  const sortedArr = array.sort((a, b) => a - b);
  sortedArr.shift();
  sortedArr.pop();

  return sortedArr.reduce((sum, num) => sum + num, 0);