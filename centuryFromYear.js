/*
Первый век охватывает период с 1 по 100 год включительно , второй век — с 101 по 200 год включительно и т. д.

Задача
Если указан год, верните столетие, в котором он находится.

Примеры
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/
function century(year) {
    let century = year / 100;
    if (Number.isInteger(century)) {
        return century;
    } else {
        return century = Math.floor(century) + 1;
    };
};
console.log(century(2025));

/*
Number.isInteger() - метод проверяет является ли число целым.
Math.floor() - метод возвращает целое число округленное вниз.
Math.ceil() - метод возвращает целое число округленное вверх.
*/

// еще вариант решения:
let century2 = (year) => Math.ceil(year / 100);
console.log(century2(2025));
