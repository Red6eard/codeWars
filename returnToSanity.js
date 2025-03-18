/*
Эта функция должна возвращать объект, но она не делает то, что задумано. Что не так?
*/
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
console.log(mystery());
