/*
Вдохновившись командой разработчиков Vooza, напишите функцию, которая
принимает имя программиста и
возвращает количество световых мечей, принадлежащих этому человеку.
Кстати, единственный человек, у которого есть световые мечи, это Зак. У него их 18, что является потрясающим числом. У всех остальных нет ни одного.
Примечание : ваша функция должна иметь параметр по умолчанию.
Например ( Вход -> Выход ):
"anyone else" --> 0
"Zach" --> 18


function howManyLightsabersDoYouOwn(name) {
    if (name === 'Zach') {
      return 18
    } else {
      return 0
    }
  }
console.log(howManyLightsabersDoYouOwn('Zach'));
*/
// перепишем на тернарник

let howManyLightsabersDoYouOwn = (name) => name === 'Zach' ? 18 : 0 ;

console.log(howManyLightsabersDoYouOwn(12))

