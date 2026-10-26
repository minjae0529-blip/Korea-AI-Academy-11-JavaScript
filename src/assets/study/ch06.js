//배열

let arr1 = new Array();
let arr2 = [];
//
// arr1[0] = 10;
// arr1[1] = 20;
// arr1[2] = 30;
// arr1.push(40);

arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2.push(40);

arr2 = [... arr2, ...arr2, 50]; //   스프레드 문법  : 앞에 10~40 있는거 가져오는거임

console.log(arr2);


//1부터 100까지 들어오는 배열 만들고 출력하기
let result = [];

for(let i = 1; i <= 100; i++){
    result = [...result, i]
}

console.log((result));