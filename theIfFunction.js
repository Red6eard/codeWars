/*
Создайте функцию с именем , _ifкоторая принимает 3 аргумента: значение boolи 2 функции (которые не принимают никаких параметров): func1иfunc2
Когда boolэто правда, func1следует вызвать , в противном случае вызовите func2.

Пример:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/
let boolean = true;

let funTrue = () => console.log('True');
let funFalse = () => console.log('False');

let _if = (bool, func1, func2) => bool ? func1() : func2();

_if(boolean, funTrue, funFalse);

