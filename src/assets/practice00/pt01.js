const count = 17;
const size = 17.1;

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' - '2';
console.log(`value: ${text}, type: ${typeof text}`);

const minjae = {name:'강민재', age:26};

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = () => {
    console.log("Yes !");
}

const printNo = function print(){
    console.log("No !");
}

randomQuiz('love you', printYes, printNo);
randomQuiz('Error', printYes, printNo);