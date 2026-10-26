async function getUserById(id) {
    const users = [
        {id: 1, username: "user1"},
        {id: 2, username: "user2"},
        {id: 3, username: "user3"},
    ];
    // user.id === id 가 참인 첫 번째 user를 찾아서 리턴
    const foundUser = users.find(user => user.id === id);

    if (!foundUser) {
        throw reject(new Error("id와 일치하는 사용자가 존재하지 않습니다."));        //reject는 이제부터 throw
    }
    return foundUser;       //return + resolve(값)
}

async function getPostsByUserName(userName) {
    const posts = [
        {id: 1, content: "내용1", username: "user1"},
        {id: 2, content: "내용2", username: "user2"},
        {id: 3, content: "내용3", username: "user1"},
        {id: 4, content: "내용4", username: "user2"},
    ];
    const foundPosts = posts.filter(post => post.username === userName);
    if (!foundPosts.length) {
        throw (new Error("해당 userName으로 검색된 게시글이 없습니다"));
    }
    return foundPosts;
}

//비동기들끼리 동기동작을 해야하기 위해 async, await사용
//함수명 앞에 async을 붙히면 프로미스를 리턴하는 함수가 됨
//밑에 함수와 동일하게 된 모습임
async function asyncFx() {

}

function asyncFx2() {
    return new Promise((resolve, reject) => {

    });
}

async function run() {
    try {
        //Promise에만 await을 붙힐 수 있음. awit을 붙히면, 비동기를 동기로 만듦 resolve의 값을 value로 리턴해줌
        //await을 쓸 떄 try~catch문을 꼭 써줘야 함, async안에서만 await을 사용할 수 있음
        //비동기 큐에서 꺼내올 때 까지 대기하라는 것임
        let value = await new Promise(resolve => resolve(100));
        let foundUser = await getUserById(1);       //await은 프로미스 앞에만 붙힐 수 있음
        console.log(await getPostsByUserName(foundUser.username));
    } catch (error) {
        console.error(error);
    }
}

run();