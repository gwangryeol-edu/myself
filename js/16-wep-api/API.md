### API 보고서 (서버-클라이언트 관계 추가)

#### 1. API 개념 및 필요성

- **개념**: API(Application Programming Interface)는 소프트웨어 애플리케이션이 서로 상호 작용하기 위해 사용하는 규칙과 도구의 집합. 특정 기능이나 데이터에 접근할 수 있도록 미리 정해진 약속(프로토콜).

- **필요성**:
    - **효율성**: 개발자가 모든 기능을 직접 만들 필요 없이, 기존에 만들어진 API를 활용하여 개발 시간을 단축하고 효율성을 높임.
    - **모듈화**: 복잡한 시스템을 여러 개의 작은 서비스로 나누고, 이들 간의 통신을 API로 정의하여 유지보수와 확장성을 용이하게 함.
    - **데이터 공유**: 다른 서비스나 애플리케이션에 데이터를 안전하게 제공하고 공유할 수 있는 표준화된 방법을 제공. (예: 날씨 정보 API, 지도 API)

#### 2. 서버와 클라이언트 관계

- **개념**: 서비스를 **요청(Request)**하는 쪽을 **클라이언트(Client)**, 요청을 받아 처리 후 **응답(Response)**하는 쪽을 **서버(Server)**라고 함. API는 이 둘 사이의 소통 창구 역할을 함.

- **주요 역할**:
    - **클라이언트**: 사용자에게 보여지는 화면(UI)을 제공. 사용자의 요청을 서버로 전달하고, 서버로부터 받은 데이터를 화면에 표시. (예: 웹 브라우저, 스마트폰 앱)
    - **서버**: 클라이언트의 요청을 받아 비즈니스 로직을 수행하고, 데이터베이스 조회/수정/삭제 등의 작업을 처리한 후 그 결과를 클라이언트에 전달.

- **상호작용 도식**:

    ```mermaid
    graph TD
        A["사용자(User)"] --> B["클라이언트 (웹 브라우저, 앱 등)"];
        B -- "HTTP 요청 (API 호출)" --> C["서버 (데이터, 로직 처리)"];
        C -- "HTTP 응답 (결과: 데이터, 성공/실패)" --> B;
        C --> D["데이터베이스"];
    ```

#### 3. Web API 개념 및 특징

- **개념**: 웹 서버 또는 웹 브라우저를 통해 접근할 수 있는 API. HTTP 프로토콜을 기반으로 동작하며, 웹의 구성 요소들이 서로 통신하는 데 사용됨.

- **특징**:
    - **플랫폼 독립성**: HTTP를 사용하므로 특정 프로그래밍 언어나 운영체제에 종속되지 않음.
    - **표준 기반**: REST(Representational State Transfer), SOAP(Simple Object Access Protocol) 등 널리 사용되는 아키텍처 스타일과 표준을 따름.
    - **데이터 형식**: 주로 JSON(JavaScript Object Notation)이나 XML(eXtensible Markup Language) 형식을 사용하여 데이터를 교환. 가볍고 사람이 읽기 쉬운 JSON이 더 널리 사용됨.

#### 4. HTTP 기초 개념

- **개념**: HTTP(HyperText Transfer Protocol)는 클라이언트와 서버 간에 데이터를 주고받기 위한 통신 규약.

- **주요 요청 메서드(Methods)**:
    - `GET`: 서버로부터 정보를 조회(Read).
    - `POST`: 서버에 새로운 정보를 생성(Create).
    - `PUT` / `PATCH`: 서버의 정보를 수정(Update).
    - `DELETE`: 서버의 정보를 삭제(Delete).

- **주요 상태 코드(Status Codes)**:
    - `2xx` (성공): 요청이 성공적으로 처리됨. (예: `200 OK`)
    - `4xx` (클라이언트 오류): 요청에 오류가 있음. (예: `404 Not Found` - 요청한 리소스 없음, `400 Bad Request` - 잘못된 요청)
    - `5xx` (서버 오류): 서버 측에서 오류가 발생함. (예: `500 Internal Server Error`)

#### 5. URL 구조

- **개념**: URL(Uniform Resource Locator)은 인터넷 상의 자원(Resource)의 위치를 나타내는 주소.
- **구조**: `Scheme://Host:Port/Path?Query`
    - **Scheme**: 통신 방식 (프로토콜). (예: `http`, `https`, `ftp`)
    - **Host**: 자원이 위치한 서버의 도메인 이름 또는 IP 주소. (예: `www.example.com`)
    - **Port**: 서버에서 사용하는 포트 번호. (http는 80, https는 443이 기본값이며 생략 가능)
    - **Path**: 서버에서 자원의 구체적인 경로. (예: `/users/1`)
    - **Query**: 서버에 전달하는 추가적인 정보(파라미터). `?`로 시작하며, `key=value` 형태로 구성되고 `&`로 여러 개를 연결. (예: `?sort=asc&limit=10`)

#### 6. 웹 브라우저를 통한 API 호출 방법

1.  **주소창에 URL 직접 입력**:
    - 가장 간단한 방법으로, `GET` 메서드를 사용하는 API를 호출할 수 있음.
    - 예: `https://jsonplaceholder.typicode.com/posts/1`을 주소창에 입력하면 해당 데이터를 JSON 형태로 볼 수 있음.

2.  **개발자 도구 콘솔에서 `fetch()` 사용**:
    - 웹 브라우저의 개발자 도구(F12) 콘솔 창에서 JavaScript의 `fetch()` 함수를 사용하여 다양한 종류의 API를 호출할 수 있음.

    - **GET 요청 예시**:
        ```javascript
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => console.log(data));
        ```

    - **POST 요청 예시**:
        ```javascript
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        })
          .then(response => response.json())
          .then(data => console.log(data));
        ```