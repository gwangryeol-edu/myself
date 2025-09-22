// 2.1. 콜백 함수 (Callback Function)
function doSomething(callback) {
  // ... 작업 수행 ...
  console.log('Doing something...');
  callback();
}
const sayGoodbye = () => console.log('Goodbye!');
doSomething(sayGoodbye);

console.log('---');

// 2.2. 고차 함수와 클로저 (Higher-Order Function & Closure)
function createGreeter(greeting) {
  // greeting 값을 기억하는 클로저 함수를 반환
  return function(name) {
    console.log(greeting + ', ' + name + '!');
  };
}
const greetInEnglish = createGreeter('Hello');
greetInEnglish('John'); // Hello, John!

console.log('---');

// 3. 배열 고차 함수
// 3.1. map()
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n); // [1, 4, 9]
console.log('map result:', squared);

// 3.2. filter()
const scores = [88, 42, 76];
const passing = scores.filter(s => s >= 70); // [88, 76]
console.log('filter result:', passing);

// 3.3. reduce()
const values = [10, 20, 30];
const sum = values.reduce((acc, cur) => acc + cur, 0); // 60
console.log('reduce result:', sum);
