// console.log(1000);
//
// new Promise(() => {
//     console.log(1);
// })
//
// new Promise((resolve) => {
//     console.log(2);
// })
//
// new Promise((resolve) => {
//     console.log(3);
// })
//
// new Promise((resolve) => {
//     console.log(4);
//     resolve(5);
// }).then(r => console.log(r));       //비동기
//
// new Promise((resolve) => {
//     console.log(6);
//     resolve(7);
// }).then(r => console.log(r));       //비동기
//
// new Promise((resolve) => {
//     console.log(8);
//     resolve(9);
// }).then(r => {
//     console.log(r)
// });       //비동기
//
// new Promise((resolve, reject) => {
//     console.log(10);
//     reject(11);
// }).then(r => {
//     console.log(r);
//     return 12;
// })

// 자바스크립트는 호이스팅 : 함수 선언들이 자동으로 제일 위로 올라감
// 호이스팅에서는 초기화는 밑에, 선언은 제일 위로
// var은 재선언이 가능함, 이에 대체로 let. 추가로 const도. 결론은 변수는 호이스팅 안됨

// [컨트롤러 역할] username을 받아서 응답 객체(response)를 만들어 반환하는 함수
// 실제 서버라면 DB 조회 후 결과를 돌려주는 부분을 흉내 낸 것
function getUserOfController(username) {
    console.log("서버에서 사용자 정보 요청 받음");
    // 기본 응답: 성공(200) 상태로 먼저 만들어 둠
    const response = {
        status: 200,                      // HTTP 상태 코드 (200 = 성공)
        data: {                           // 실제 사용자 정보
            username: username,
            password: "1q2w3e4r",
            name: "강민재",
            email: "test@gamil.com",
        },
        requestAddress: "192.168.0.109",  // 요청한 쪽 IP
        requestHeader: "https-only",
    }

    // username 검증
    // (username ?? "")  → username이 null/undefined면 빈 문자열("")로 대체
    // .trim()           → 앞뒤 공백 제거
    // !("")             → 빈 문자열은 false이므로 ! 붙이면 true → 검증 실패
    // 즉, username이 없거나 공백뿐이면 이 if문에 들어감
    if (!(username ?? "").trim()) {
        return {
            ...response,                  // 스프레드: 기존 response 내용을 전부 복사한 뒤
            status: 400,                  // status만 400(잘못된 요청)으로 덮어씀
            data: {                       // data도 에러 메시지로 통째로 교체
                message: "사용자 정보를 확인하세요",
            }
        }
    }
    // 검증 통과 시 처음 만든 성공 응답(200)을 그대로 반환
    return response;
}

// [서비스 역할] 컨트롤러 결과를 Promise로 감싸서 반환하는 함수
// 호출하는 쪽에서 .then() / .catch()로 결과를 처리할 수 있게 해줌
function getUser(username) {
    // Promise 생성자: resolve(성공 처리), reject(실패 처리) 두 함수를 받음
    return new Promise((resolve, reject) => {
        console.log("서버로 사용자 정보 요청");
        const response = getUserOfController(username);

        // 상태 코드가 200이 아니면 실패로 판단
        if (response.status !== 200) {
            reject(response.data);        // 실패: data(에러 메시지)를 .catch()로 전달
            return;                       // 아래 resolve가 실행되지 않도록 함수 종료
        }

        resolve(response.data);           // 성공: data(사용자 정보)를 .then()으로 전달
    });
}

// ---------- 실행부 ----------

console.log("전체 랜더링 시작");          // 동기 코드: 가장 먼저 출력됨

getUser("test")                           // "test"를 넘김 → 검증 통과 → resolve 호출
    .then((responseData) => {             // resolve된 값(사용자 정보)이 responseData로 들어옴
        console.log(responseData);        // 사용자 정보 객체 출력
    })
    .catch((error) => {                   // reject된 값(에러 메시지)이 error로 들어옴
        console.log(error);               // 이번엔 성공이라 실행되지 않음
    });

console.log("다른요청2")
console.log("다른요청3")
console.log("프로그램 종료")