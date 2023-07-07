// // // Суммируйте все числа заданного массива(cq.list), кроме самого высокого и самого низкого элемента(по значению, а не по индексу!).

// // Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением.

// // Помните о проверке ввода.
// Если вместо массива задано пустое значение ( null, None, Nothing и т. д.), или данный массив является пустым списком или списком только с 1 элементом, вернуть 0.
function sumArray(array) {
  if(array === null){
    return 0
  }
  const min = Math.min(array);
  const max = Math.max(array);
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    if(array[i] === min 
    || 
    array[i] === max){
      continue
  };
  sum += array[i];
  console.log(sum);
  };
  if (array.length <= 1) {
    console.log(0)
  }
};
sumArray(null);