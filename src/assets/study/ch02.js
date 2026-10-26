function main(){
    console.log("메인함수 호출");
    let student = {
        name : "강민재",
        age : 25,
        address : ["부산시", "부산진구", "부암동",],
    };
    console.log(student);

    //중괄호를 넣으면 objcet가 됨. []는 리스트
    //타입 리스언어는 컴파일 될 때 값이 변수에 저장될 땨 타입이 정해짐
    let student2 = null;        //참조자료형으로 본다 = 객체로 보겟다 이거임
    console.log(typeof student2);

    let student3 = 0/0;
    console.log(typeof student3);

    //변수도 있지만, 상수도 있음. 자바에서 fianl붙힌거임
    const p1 = 3.14;
    console.log(typeof p1);
}

main();

//let : 변수선언