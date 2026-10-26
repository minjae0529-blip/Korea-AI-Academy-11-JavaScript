setTimeout(() => {
    console.log(2)}, 1000);

function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello'));

//비동기
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('heehee'), 3000);

