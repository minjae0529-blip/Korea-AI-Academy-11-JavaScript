//함수

function add(a, b){
    return a+b;
}

console.log(add(1, 2));

const add2 = function (a, b){           //자바스크립트에서는 함수를 값으로 봄
    return a + b;
}

console.log(add2(10, 20));

console.log(function add3(a, b) {return a+b})

const add4 = function add5(a, b){ return a+b}       //함수의 주소를 담는 것임

console.log(add4);
console.log(add4(100, 200));

//함수의 주소값 + () => 호출로 볼 수 있음
console.log(function (a, b) {return a+ b} (1000, 200));

//함수의 콜백함수
function a1(){
    console.log("a1 함수호출");
}

function a2(){
    console.log("a2 함수호출");
}
function b(callbackA){
    callbackA();
    console.log("b함수 호출")
}

b(a1);
b(a2);

a1(b);

// 테스트 코드
function calculate(a, b, callback){
  callback(a+b)
}
calculate(3, 5, function(result) {
    console.log(`결과는 ${result}입니다`);
});

function checkAdult(name, age, adultCallback, minorCallback) {
    // 나이(age)가 20세 이상인지 확인
    if (age >= 20) {
        adultCallback(name); // 함수 실행 및 name 전달
    } else {
        minorCallback(name); // 함수 실행 및 name 전달
    }
}

// 테스트 코드
checkAdult("철수", 25,
    (name) => console.log(`${name}님은 성인입니다. 입장이 가능합니다!`),
    (name) => console.log(`${name}님은 미성년자입니다. 보호자가 필요해요.`)
);

function processArray(arr, callback) {
    // TODO: 반복문을 사용하여 배열의 각 요소를 순회하며 콜백 함수에 요소를 전달해 실행하세요.
    for(let n of arr){
        callback(n);
    }
}

// 테스트 코드
processArray([1, 2, 3, 4], function(item) {
    console.log(item * 2);
});


function delayedMessage(message, seconds, callback) {
    // TODO: setTimeout을 사용하여 seconds(초) * 1000 밀리초 뒤에
    // message를 출력하고 콜백 함수를 실행하세요.
    console.log(message);
    setTimeout(() =>callback(), seconds * 1000);
    console.log("여기 실행");

}

// 테스트 코드
delayedMessage("안녕하세요!", 2, function() {
    console.log("콜백 함수가 실행되었습니다!");
});

//1, 2, 3, 4 ' ' ' ' 10
function call(num){
    console.log(num)
}

for(let i =0; i < 10; i++){
    console.log(`index: ${i}`);
    setTimeout(function (){call(i+1) * 1000})
};

function step1(callback){
    function timeoutCallback(){
        console.log("1단계완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step2(callback){
    function timeoutCallback(){
        console.log("2단계완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step3(callback){
    function timeoutCallback(){
        console.log("3단계완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

step1(function(){
    step2(function(){
        step3(function(){
            console.log("모든 단계 완료");
        });
    });
});

//화살표 함수

function sum(a, b){
    return a + b;
}

const sum2 = function (a, b){
    return a + b;
}

const sum3 = (a, b) => {
    return a+b;
}

//실행명령이 하나이면 중괄호 생략가능
const sum4 = (a, b) => a+b;
console.log(sum4(10, 20));
const sum5 = (a, b) => console.log(a, b);
sum5(10, 20);

//매개변수의 갯수가 하나이면 () 생략가능
const sum6 = a => console.log(a+ a)

