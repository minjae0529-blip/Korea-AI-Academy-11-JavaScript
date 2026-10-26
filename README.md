# ⚡ JavaScript Core Deep Dive & Practical Studies

> **대한민국 인공지능 아카데미 11기 자바스크립트 핵심 개념 및 실전 비동기 통신 저장소**  
> 모던 자바스크립트(ES6+)의 런타임 특성, 불변성(Immutability), 고차 함수, 그리고 이벤트 루프 기반의 비동기 흐름 제어(Promise, async/await, fetch)를 심층 학습하고 실습한 코드베이스입니다.

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=flat-square&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Asynchronous-Promise%20%7C%20async%2Fawait%20%7C%20fetch-orange?style=flat-square"/>
  <img src="https://img.shields.io/badge/Focus-Clean%20Code%20%26%20Network%20Integration-blue?style=flat-square"/>
</p>

---

## 📌 Executive Summary (학습 목표 및 역량 요약)

본 저장소는 단순 문법 학습을 넘어, **웹 프론트엔드 및 서블릿 백엔드 연동 실무에서 발생하는 런타임 예외와 비동기 병목을 안전하게 제어할 수 있는 자바스크립트 기초 체력**을 기르는 데 중점을 두었습니다.

* **동작 원리 기반 이해**: 동적 타입 언어의 암묵적 형변환 위험성을 인지하고, 엄격한 동등 비교(`===`) 및 타입 가드를 적용.
* **함수형 프로그래밍 기초 체득**: 함수가 일급 객체(First-class Citizen)임을 이해하고 고차 함수(`map`, `find`) 및 콜백 패턴을 적극 활용.
* **데이터 불변성(Immutability) 관리**: 스프레드 연산자(`...`)를 활용한 원본 데이터 보존 및 참조 타입(Reference Type)의 부수 효과(Side-effect) 최소화.
* **완전한 비동기 파이프라인 정복**: `setTimeout` ➔ `Promise` ➔ `async/await` ➔ `fetch API`로 이어지는 비동기 진화 과정을 단계별로 직접 구현하며 이벤트 루프와 네트워크 통신 에러 처리 체득.

---

## 🗺️ Curriculum & Core Competencies (학습 목차)

### 🌱 PART 1. 변수·자료형·연산자 및 타입 시스템 (Ch01 ~ Ch05)
| 챕터 | 파일명 | 주제 및 핵심 학습 내용 |
| :--- | :--- | :--- |
| **Ch01** | [`ch01.js`](./src/assets/study/ch01.js) | **변수와 JSON 직렬화**: `let`/`const` 스코프, 참조형 객체 구조, `JSON.stringify()` & `JSON.parse()` 데이터 패키징 |
| **Ch02** | [`ch02.js`](./src/assets/study/ch02.js) | **타입 감지와 불변성**: `typeof` 3대 엣지 케이스(`typeof null === 'object'`, `0/0 === NaN`), 상수 재할당 제한 |
| **Ch03** | [`ch03.js`](./src/assets/study/ch03.js) | **제어 흐름과 알고리즘**: `if-else` 분기 최적화, `switch` 문 매핑, 배열 순회 루프(`for`, `while`) |
| **Ch04** | [`ch04.js`](./src/assets/study/ch04.js) | **엄격 비교와 Truthy/Falsy**: `==` vs `===` 비교, 8대 Falsy 값 분석, `!!` 이중 부정 연산자로 불리언 형변환 |
| **Ch05** | [`ch05.js`](./src/assets/study/ch05.js) | **단축 평가 (Short-Circuit)**: 논리합(`\|\|`), 논리곱(`&&`), 널 병합(`??`) 우선순위 및 기본값 안전 처리 패턴 |

---

### 🚀 PART 2. 참조형 데이터 핸들링과 함수형 파이프라인 (Ch06 ~ Ch08)
| 챕터 | 파일명 | 주제 및 핵심 학습 내용 |
| :--- | :--- | :--- |
| **Ch06** | [`ch06.js`](./src/assets/study/ch06.js) | **배열 조작과 스프레드 문법**: 배열 조작, Rest 파라미터, `...` 문법을 통한 얕은 복사 및 불변성 유지 |
| **Ch07** | [`ch07.js`](./src/assets/study/ch07.js) | **객체 심화와 동적 프로퍼티**: 리터럴 vs 생성자, 동적 키 접근(`obj[key]`), 구조 분해 할당(Destructuring) |
| **Ch08** | [`ch08.js`](./src/assets/study/ch08.js) | **데이터 변환 (Array.map)**: 고차 함수 `map()`을 통한 원본 비파괴 변환 및 데이터-HTML 템플릿 렌더링 파이프라인 |

---

### ⚡ PART 3. 함수·콜백·비동기 흐름 제어 (Ch09 ~ Ch13)
| 챕터 | 파일명 | 주제 및 핵심 학습 내용 |
| :--- | :--- | :--- |
| **Ch09** | [`ch09.js`](./src/assets/study/ch09.js) | **일급 객체 함수와 콜백**: 함수를 인자/반환값으로 다루는 일급 객체 특성, 화살표 함수(`=>`), 동기/비동기 콜백 설계 |
| **Ch10** | [`ch10.js`](./src/assets/study/ch10.js) | **비동기 타이머 기초**: 브라우저 Web API `setTimeout`과 실행 지연 제어 패턴 |
| **Ch11** | [`ch11.js`](./src/assets/study/ch11.js) | **비동기 Mocking API 구현**: 사용자 데이터 조회 비동기 함수 모의 구현 및 예외 흐름 제어 |
| **Ch12** | [`ch12.js`](./src/assets/study/ch12.js) | **동기 vs 비동기 런타임 분석**: Call Stack과 Web API 큐 실행 순서, 동기식 콜백과 지연 콜백(`printWithDelay`) 비교 |
| **Ch13** | [`ch13.js`](./src/assets/study/ch13.js) | **Promise 상태 머신**: Producer(생산자) vs Consumer(소비자), Pending/Fulfilled/Rejected 3대 상태, `.then()` / `.catch()` / `.finally()` |

---

### 🌐 PART 4. async/await & 실전 네트워크 통신 (Ch14 ~ Ch16)
| 챕터 | 파일명 | 주제 및 핵심 학습 내용 |
| :--- | :--- | :--- |
| **Ch14** | [`ch14.js`](./src/assets/study/ch14.js) | **Promise 기반 모의 백엔드**: `Array.find()` 기반 데이터 조회 및 `resolve`/`reject` 분기 검증 |
| **Ch15** | [`ch15.js`](./src/assets/study/ch15.js) | **async / await 동기식 코드 전환**: 프로미스를 평탄화(Flat)하여 직관적 흐름 구성, `throw Error`와 `try-catch` 결합 |
| **Ch16** | [`ch16.js`](./src/assets/study/ch16.js) | **실전 Fetch API 통신**: 로컬 Java 서블릿(`localhost:8080`) 서버와의 HTTP 비동기 통신 연동 및 응답 파싱 |

---

## 🔍 Technical Deep Dive (기술적 고민과 해결 과정)

### 1. `||` vs `??` (Default Value 안전 처리 패턴)
* **문제 상황**: 사용자 입력값 또는 설정값이 `0`, `""`(빈 문자열), `false`인 경우, `||`(논리합)을 사용하면 이 값들이 Falsy로 평가되어 유효한 값임에도 기본값(Fallback)으로 덮어씌워지는 부작용 발생.
* **해결 및 적용**: 오직 `null`과 `undefined`만을 명확히 검출하는 널 병합 연산자(`??`)를 채택하여 0점이나 false 설정값이 정상 유지되도록 방어 로직 표준화.

```javascript
// ❌ 0점이 Falsy로 평가되어 기본값 100점으로 왜곡됨
const userScore = 0;
const finalScore = userScore || 100; // 100

// ⭕ null / undefined일 때만 Fallback 적용하여 0점을 안전하게 보존
const safeScore = userScore ?? 100;  // 0
```

---

### 2. 콜백 지옥(Callback Hell) 탈피와 async/await의 도입
* **문제 상황**: 비동기 처리가 중첩될수록 코드 들여쓰기 뎁스가 깊어져 가독성이 저하되고, 분산된 에러 처리로 인해 디버깅 복잡도가 급증함.
* **해결 및 적용**: 
  1. `Promise`를 통해 비동기 상태(Pending, Fulfilled, Rejected)를 객체화.
  2. `async/await` 문법을 적용하여 비동기 로직을 동기식 코드처럼 읽히도록 구조를 개선.
  3. 중앙 집중식 `try-catch` 블록으로 네트워크 오류 및 유효성 검증 실패를 단일 지점에서 핸들링.

```javascript
// Ch15 실습 발췌: 직관적인 async/await 흐름과 예외 처리
async function getUserById(id) {
    const users = [
        { id: 1, username: "user1" },
        { id: 2, username: "user2" },
    ];
    const foundUser = users.find(user => user.id === id);

    if (!foundUser) {
        throw new Error("id와 일치하는 사용자가 존재하지 않습니다.");
    }
    return foundUser;
}
```

---

### 3. Java Servlet 백엔드와 프론트엔드 비동기 연동
* **네트워크 통합**: `ch16.js`에서 Java Servlet 백엔드 엔드포인트(`http://localhost:8080/servlet_study_war_exploded/first`)와 자바스크립트의 표준 `fetch API`를 연결하여 클라이언트-서버 간의 비동기 통신 사이클 검증.
* **Response 스트림 파싱**: `.then(response => response.text())` 및 `await response.text()`를 통해 HTTP 응답 본문 스트림을 비동기 처리하는 원리 습득.

---

## 📂 Directory Structure

```bash
├── 📁 public/                     # 정적 웹 에셋
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 study/              # 📚 핵심 실습 소스코드 (Ch01 ~ Ch16)
│   │   │   ├── ch01.js ~ ch05.js  # 변수, 타입, 연산자, Truthy/Falsy
│   │   │   ├── ch06.js ~ ch08.js  # 스프레드, 객체, Array.map
│   │   │   ├── ch09.js ~ ch13.js  # 콜백, setTimeout, Promise
│   │   │   └── ch14.js ~ ch16.js  # async/await, Java Servlet 연동 fetch
│   │   ├── 📁 Practice/           # 알고리즘 및 응용 실습
│   │   └── 📁 practice00/         # 단계별 추가 연습 과제
│   ├── main.js                    # Vite 진입점
│   └── style.css                  # 스타일시트
├── index.html                     # 웹 뷰어 엔트리
├── package.json                   # 의존성 및 스크립트 정의
├── JS_CH01_11_1타강사_요약노트_문제집.md # 핵심 이론 요약 노트
└── README.md                      # 프로젝트 포트폴리오 문서
```

---

## 💻 Getting Started & Running

```bash
# 1. 저장소 클론
git clone https://github.com/minjae0529-blip/Korea-AI-Academy-11-JavaScript.git
cd Korea-AI-Academy-11-JavaScript

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행 (Vite)
npm run dev

# 4. 개별 실습 스크립트 실행 (Node.js)
node src/assets/study/ch15.js
```
