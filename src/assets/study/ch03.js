//조건문

let score = 85;

if (score > 89) {
    console.log("A");
} else if (score > 79) {
    console.log("B");
} else if (score > 69) {
    console.log("C");
} else if (score > 59) {
    console.log("D");
}

console.log(Math.floor(score / 10));        //절삭

switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("A")
        break;
    case 8:
        console.log("B")
        break;
    case 7:
        console.log("C")
        break;
    case 6:
        console.log("D")
        break;
    default:
        console.log("F")
}

//반복문
// while (true) {
//     const input = readlineSync.question("입력 : ");
//
//     if (input === "q") {
//         break;
//     } else if (input === "a1") {
//         console.log("a1을 선택")
//     } else if (input === "a2") {
//         console.log("a2을 선택")
//     } else {
//         console.log("다시입력하세요")
//     }
//     console.log(input)
// }
// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// rl.question('명령을 입력하세요 : ', (answer) => {
//     console.log(answer);
//     rl.close();
// })


for(let i = 0; i < 10; i++){
    console.log((i));
}