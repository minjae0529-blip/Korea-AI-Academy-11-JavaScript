// console.log("안녕");
// console.log("안녕");
// console.log(0/0);
//
// let name = "강민재";
// console.log(name);
//
// name = 123
// console.log(name)
//
// name = [1,2,3,4,5,6,7]
// console.log(name);
//
// name = {
//     "a" : "강민재",
//     "b" : "[1.2.3.4]",
//     "c" : 1234,
// }
// console.log(name);
// console.log(name["b"]);
// console.log((name.a));

let data = [
    {
        class1: {
            student1: {

                id: 1,
                object: {
                    name: "강민재",
                    address: "서울"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    },
    {
        class2: {
            student2: {
                id: 2,
                object: {
                    name: "강민재",
                    address: "제천"
                },
                createdAt: new Date("2025-10-22")
            }
        }
    }
]
console.log(JSON.stringify(data));
console.log(data[1].class2.student2.object.name);