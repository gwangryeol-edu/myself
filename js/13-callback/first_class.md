# 일급 객체 (First-Class Object)

## 1. 일급 객체란?

프로그래밍 언어에서 **함수(function)를 다른 일반적인 값(예: 숫자, 문자열)처럼 다룰 수 있다**는 의미입니다.

마치 우리가 숫자 `10`이나 문자열 `"안녕하세요"`를 변수에 넣거나, 다른 함수에 전달하는 것처럼 함수도 똑같이 취급할 수 있다는 뜻입니다.

JavaScript의 함수가 대표적인 일급 객체이며, 다음과 같은 특징을 가집니다.

1.  **변수에 할당할 수 있습니다.**
    ```javascript
    // 함수를 변수 sayHello에 할당
    const sayHello = function() {
      console.log('Hello!');
    };

    sayHello(); // 출력: Hello!
    ```

2.  **다른 함수의 인자(argument)로 전달할 수 있습니다.** (⭐️ **이것이 바로 콜백 함수입니다!**)
    ```javascript
    function doSomething(callback) {
      console.log('어떤 작업을 수행합니다...');
      // 인자로 받은 함수(callback)를 나중에 호출
      callback();
    }

    const sayGoodbye = function() {
      console.log('Goodbye!');
    };

    // sayGoodbye 함수를 doSomething 함수의 인자로 전달
    doSomething(sayGoodbye);

    /*
    출력:
    어떤 작업을 수행합니다...
    Goodbye!
    */
    ```

3.  **다른 함수에서 반환 값(return value)으로 사용할 수 있습니다.**
    ```javascript
    function createGreeter(greeting) {
      // 함수를 만들어서 반환
      return function(name) {
        console.log(greeting + ', ' + name + '!');
      };
    }

    const greetInEnglish = createGreeter('Hello');
    const greetInKorean = createGreeter('안녕하세요');

    greetInEnglish('John');  // 출력: Hello, John!
    greetInKorean('철수');   // 출력: 안녕하세요, 철수!
    ```

## 2. 어떤 상황에 사용하나요?

일급 객체의 특징 덕분에 함수를 매우 유연하고 강력하게 사용할 수 있습니다.

*   **이벤트 처리**: 웹사이트에서 버튼을 클릭했을 때 특정 동작을 실행시키고 싶을 때, '클릭' 이벤트가 발생하면 실행될 함수(콜백 함수)를 전달합니다.
    ```javascript
    // button.addEventListener('click', 실행할_함수);
    ```
*   **비동기 처리**: 서버에서 데이터를 가져오는 데 시간이 걸릴 때, "데이터를 다 가져오면 이 함수를 실행해 줘"라는 의미로 콜백 함수를 사용합니다.
*   **코드의 재사용성 및 추상화**: 특정 로직만 다른 함수를 주입해서 다양한 기능을 수행하는 함수를 만들 수 있습니다. (예: `map`, `filter`, `reduce` 같은 배열 함수들)

## 3. 비슷한 개념과 차이점

*   **고차 함수(Higher-Order Function)**
    *   **정의**: 위에서 본 것처럼 **함수를 인자로 받거나, 함수를 반환하는 함수**를 '고차 함수'라고 부릅니다.
    *   **관계**: 프로그래밍 언어가 '일급 객체'로서의 함수를 지원하기 때문에 '고차 함수'를 만들 수 있는 것입니다. 즉, 일급 객체는 함수의 *특징*이고, 고차 함수는 그 특징을 활용한 *함수의 한 종류*라고 생각하시면 쉽습니다.

## 4. 연관된 추가 학습 개념 추천

*   **콜백 함수(Callback Function)**: 이제 일급 객체를 이해하셨으니, 왜 콜백 함수가 필요한지, 특히 비동기 상황에서 어떻게 동작하는지 깊이 있게 학습해 보세요.
*   **고차 함수(Higher-Order Function)**: JavaScript 배열의 내장 고차 함수인 `map`, `filter`, `reduce`를 직접 사용해 보세요. 코드의 질이 달라지는 것을 느낄 수 있습니다.
*   **클로저(Closure)**: 위의 3번 예제(`createGreeter`)가 바로 클로저의 원리를 이용한 것입니다. 함수가 자신이 생성될 때의 환경을 기억하는 중요한 개념입니다.
