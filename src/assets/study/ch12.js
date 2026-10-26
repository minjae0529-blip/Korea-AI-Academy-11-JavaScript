// 동기
console.log('1');
//setTimeout 호출, 웹 브라우저 api임
setTimeout(() => {
    console.log('2');
}, 1000)
console.log('3');

//즉각적으로 실행 callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

//비동기 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('비동기다'), 2000);

//callback 예제
class UserStorage {
    // 로그인: 2초 뒤에 id/password를 확인
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);                      // 성공: id를 콜백으로 전달
            } else {
                onError(new Error('not found'));    // 실패: 에러 객체 전달
            }
        }, 2000);
    }

    // 권한 조회: 1초 뒤에 user의 role을 확인
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = 'enter your id';
const password = 'enter your password';

userStorage.loginUser(
    id,
    password,
    (user) => {                                         // 로그인 성공
        userStorage.getRoles(
            user,
            (userWithRole) => {                         // 권한 조회 성공
                console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {                                // 권한 조회 실패
                console.log(error.message);
            }
        );
    },
    (error) => {                                        // 로그인 실패 (빠져 있던 부분)
        console.log(error.message);
    }
);