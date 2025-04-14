/*
Создайте функцию, которая принимает число в качестве аргумента и возвращает оценку на основе этого числа.
Счет Оценка
Все, что больше 1 или меньше 0,6 "Ф"
0,9 или больше "А"
0,8 или больше "Б"
0,7 или больше "С"
0,6 или больше "Д"
Примеры:
grader(0) should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
*/
function grader(score) {
  switch (true) {
    case (score < 0.6 || score > 1):
      return "F";
    case (score >= 0.9):
      return "A";
    case (score >= 0.8):
      return "B";
    case (score >= 0.7):
      return "C";
    case (score >= 0.6):
      return "D";
    default:
      return "F"; 
  }
};

// Примеры использования
console.log(grader(0.99));
