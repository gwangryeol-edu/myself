## JavaScript `fetch` API 보고서

### 1. 개요

- `fetch`는 HTTP 요청(request)을 비동기적으로 처리하기 위한 JavaScript 인터페이스.
- `Promise` 객체를 기반으로 동작하며, 기존의 `XMLHttpRequest`를 대체하는 최신 웹 API 표준.

### 2. 탄생 배경

- 기존 `XMLHttpRequest`는 콜백(callback) 기반으로 동작하여 코드가 복잡해지는 문제(콜백 헬)가 있었음.
- 더 간결하고 가독성 높은 비동기 처리 방식에 대한 요구로 `Promise` 기반의 `fetch` API가 등장.
- 복잡한 설정 없이 HTTP 요청을 보낼 수 있도록 설계됨.

### 3. 사용 상황

- REST API를 호출하여 서버의 데이터를 가져오거나 전송할 때. (예: 게시판 글 목록, 사용자 정보 가져오기)
- 외부 API(날씨, 지도 등)와 연동하여 동적인 웹 애플리케이션을 제작할 때.
- 서버로 JSON, 폼 데이터(form data) 등을 전송하여 데이터를 생성하거나 수정할 때.

### 4. `XMLHttpRequest`와의 차이점

| 구분 | `fetch` | `XMLHttpRequest` |
| --- | --- | --- |
| **기반** | `Promise` 기반 | 이벤트 핸들러(콜백) 기반 |
| **문법** | 간결하고 직관적 | 상대적으로 복잡하고 장황함 |
| **응답 처리** | `response` 객체를 통해 상태, 헤더, 본문 처리 | 여러 속성과 메서드로 나누어 처리 |
| **에러 처리** | 네트워크 오류 시에만 `reject`, 4xx/5xx 응답은 `resolve` | `onerror` 이벤트 핸들러로 네트워크 오류 처리 |
| **호환성** | 최신 브라우저에서 지원 | 오래된 브라우저까지 폭넓게 지원 |

### 5. 예시 코드

#### GET 요청 (데이터 조회)

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // 서버 응답이 성공적인지 확인 (HTTP 상태 코드가 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // 응답 본문을 JSON으로 파싱
    return response.json();
  })
  .then(data => {
    // 파싱된 데이터 사용
    console.log(data);
  })
  .catch(error => {
    // 네트워크 오류 또는 파싱 오류 처리
    console.error('Fetch error:', error);
  });
```

#### POST 요청 (데이터 생성)

```javascript
const newData = {
  title: '새로운 게시물',
  body: '게시물 내용입니다.',
  userId: 1
};

fetch('https://api.example.com/posts', {
  // HTTP 메서드 지정
  method: 'POST',
  // 전송할 데이터의 종류와 인코딩 지정
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  // JavaScript 객체를 JSON 문자열로 변환하여 본문에 담음
  body: JSON.stringify(newData)
})
.then(response => response.json())
.then(data => {
  console.log('서버로부터 받은 응답:', data);
})
.catch(error => {
  console.error('Fetch error:', error);
});
```

### 6. Axios 라이브러리

- `axios`는 `Promise` 기반의 HTTP 클라이언트 라이브러리로, 브라우저와 Node.js 환경 모두에서 사용할 수 있음.
- `fetch`와 유사하지만, 요청/응답 인터셉터, 요청 취소, 자동 JSON 변환 등 다양한 편의 기능을 내장하여 개발 생산성을 높여줌.

#### 사용 상황

- 요청/응답을 가로채 전역적인 로직(예: 토큰 추가, 에러 처리)을 추가하고 싶을 때.
- 요청 시간 초과(timeout) 설정, 요청 취소 등 `fetch`에 없는 부가 기능이 필요할 때.
- 구형 브라우저(IE11 등)까지 폭넓은 호환성이 필요할 때.
- Node.js 환경과 브라우저에서 동일한 코드로 HTTP 통신을 구현하고 싶을 때.

### 7. `fetch`와 `axios` 비교

| 구분 | `fetch` | `axios` |
| --- | --- | --- |
| **설치** | 내장 API (설치 불필요) | 라이브러리 (설치 필요) |
| **JSON 처리** | `response.json()` 수동 호출 | 자동으로 JSON 데이터로 변환 |
| **에러 처리** | 네트워크 오류만 `reject`, 4xx/5xx는 `resolve` | 4xx/5xx 응답도 `reject`하여 `catch`에서 처리 |
| **인터셉터** | 지원 안 함 | 요청/응답 인터셉터 기능 지원 |
| **요청 취소** | `AbortController` 사용 | `CancelToken` 또는 `AbortController` 사용 |
| **브라우저 호환성** | 최신 브라우저 지원 | 구형 브라우저까지 폭넓게 지원 |

### 8. `axios` 예시 코드

#### GET 요청 (데이터 조회)

```javascript
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    // 응답 데이터는 response.data에 담겨 있음
    console.log(response.data);
  })
  .catch(error => {
    // 서버의 4xx/5xx 에러도 여기서 처리됨
    console.error('Axios error:', error);
  });
```

#### POST 요청 (데이터 생성)

```javascript
import axios from 'axios';

const newData = {
  title: '새로운 게시물',
  body: '게시물 내용입니다.',
  userId: 1
};

axios.post('https://api.example.com/posts', newData)
  .then(response => {
    console.log('서버로부터 받은 응답:', response.data);
  })
  .catch(error => {
    console.error('Axios error:', error);
  });
```
