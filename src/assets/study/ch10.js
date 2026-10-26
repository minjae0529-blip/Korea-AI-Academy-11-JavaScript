// 비동기 동작을 위한 Promise
console.log(1);
console.log(2);
console.log(3);
// setTimeout(() => console.log(4), 1000);
console.log(5);

const p1 = new Promise((resolve, reject) => {
    console.log("프로미스 생성");
    resolve(10);        // 프로미스를 10으로 이행(fulfilled) 상태로 만듦
});

p1.then((result) => {   // then의 콜백은 현재 코드가 끝난 뒤 실행됨
    console.log(result);   // 10
    return 30;             // 다음 then으로 넘김
}).then((result) => {
    console.log(result);   // 30
});

const p2 = new Promise((resolve, reject) => {
    console.log("프로미스 생성2");
    resolve(20);
});

p2.then((result) => {
    console.log(result);   // 20 (return이 없으므로 다음 then은 undefined를 받음)
}).then((result) => {
    return 40;             // 다음 then으로 넘김
}).then((result) => {      // 추가된 부분
    console.log(result);   // 40
});


new Promise((resolve, reject) => {
    resolve("1단계");
}).then((result) => {
    console.log(result);


    new Promise((resolve, reject) => {
        resolve("2단계");
    }).then((result) => {
        console.log(result);
    })
})







