const r1 = 10 && 20 && null;
console.log(r1);                // &&연산자 : 하나라도 null, 0이면 그 값이 출력 된다, 이유는 &&연산자는 모두 true여야 함
                                //그게 아니라면 마지막에 있는 값이 채택이 됨

const r2 = 10 || 20 || 30;  // ||연산자 : 첫번째 값에 의해서 정해짐, 그개 false라면 다음 true되는 값이 채택되는거임
console.log(r2);

const data = null;
const r3 = data ?? 20;      // ?? 연산자는 null, undefined 일때만 사용함
console.log(r3);