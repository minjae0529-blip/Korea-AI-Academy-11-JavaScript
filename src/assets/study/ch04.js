//연산자 : 자바스크립트에서는 === 3개짜리를 써야 해, 자료형까지 비교해줘

console.log(10 === 10);
console.log(10 === "10");

console.log(10 !== "10");
console.log(9 === "10");

console.log(!false);
console.log(!true);

console.log(!0);        //0을 false로 보기때문애ㅔ true로 반환하는거임
console.log(!!0);

//밑에있는것들은 전부 false로 처리. 강사님이 많이 사용하실 예정
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!Nan);
console.log(!![].length);   //배열은 배열 자체를 들고 오는게 아니라, 배열의 길이를 들고옴
console.log(!!{});          //  객체
