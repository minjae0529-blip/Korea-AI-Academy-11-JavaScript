// Promise : 자바스크립트 안에 내장되어 있는 object
// 1. 프로미스 만들어지는 순간 내부 코드 실행 / 사용자가 버튼을 눌렀을 때 네트워크 요청을 하게 되면 불필요한 네트워크 연결이 됨 (유의해야함)
// 2.
// status : 기능수행을 하는지(pending), 아님 진행중인지(fulfilled or rejected)
// Producer vs Consumer

//Producer
const promise = new Promise((resolve, reject) => {
    //doing some heavy work : 네트워크에서 데이터를 받아오거나, 파일을 읽는것들. 즉 시간이 걸리는거는 비동기로 처리를 함
    console.log('doing something');
    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'));   // resolve가 먼저 실행돼서 무시됨
    }, 2000);
});

//Consumer  : then, catch, finally를 활용해서 값을 받아올 수 있음
//then : resolve가 가지고 있는 값을 value로 전달
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally'); // 성공하든, 실패하든 출력
    });


//Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)   // 1 * 2
    .then(num => num * 3)   // 2 * 3
    .then(num => {          // 6
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));     // 5


// 에러 핸들링 (닭 → 달걀 → 요리)
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(hen => getEgg)
    .then(egg => cook)
    .catch(error => {
        return '🥖'
    })
    .then(console.log)
    .catch(error => console.log(error));