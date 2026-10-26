/*
const students = [{
    name:"강민재",
    age : 26,
},
{
    name:"강민재1",
    age:36,
},
]
 */

/*
const domStudents = [
    "<div><div>이름 : 강민재</div><div>나이 : 26</div><div>",
    "<div><div>이름 : 강민재1</div><div>나이 : 36</div><div>",
]
 */

let students = [{
    name:"강민재",
    age : 26,
},
    {
        name:"강민재1",
        age:36,
    },
]

students = [
    ...students,
    {
        name:"강민재3",
        age:40,
    }
]

function mapFx(data) {
    return `<div>
    <div>이름 : ${data.name}</div>
    <div>나이 : ${data.age}</div>
</div>`;
}

const domStudents = students.map(mapFx) //map은 새로운 배열을 만들어주는것, map안에 함수를 내장하면. 
console.log(domStudents)