/*
Создать класс Призрак

Объекты-призраки создаются без каких-либо аргументов.

При создании объектов-призраков им присваивается случайный цветовой атрибут «белый», «желтый», «фиолетовый» или «красный».

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

*/


let Ghost = function() {
  let colorArr = ['white', 'yellow', 'purple', 'red'];
  this.color = colorArr[Math.floor(Math.random()*colorArr.length)];
};

ghost1 = new Ghost;
ghost2 = new Ghost;

console.log(ghost1);
console.log(ghost2);
