/*
Ваша задача — написать функцию toLeetSpeak, которая преобразует обычное английское предложение в Leetspeak.

Подробнее о LeetSpeak вы можете прочитать на вики -> https://en.wikipedia.org/wiki/Leet .

Учитывайте только прописные буквы (без строчных букв и цифр) и пробелы.

Например:

toLeetSpeak("LEET") returns "1337"
В этом ката мы используем простой диалект LeetSpeak. Используйте этот алфавит:
*/

const alphabet = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
};

let string = 'HELLO WORLD';
/*
function toLeetSpeak(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    console.log(key);
    if (key in alphabet) {
      str = alphabet[key];
      
    }
    //return str
    console.log(str)
  }
  
  //return str;
  
  }*/
  
  function toLeetSpeak(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const leetChar = alphabet[char];
      result += leetChar ? leetChar : char;
    }
    return result;
};

console.log(toLeetSpeak(string));