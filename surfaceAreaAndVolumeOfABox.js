/*
Напишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива:[area, volume]
*/

function getSize(width, height, depth){
    let area = (width * height + width*depth+ height*depth)*2;
    let volume = (width * height * depth);
    return [area, volume]
};

console.log(getSize(2,3,5));