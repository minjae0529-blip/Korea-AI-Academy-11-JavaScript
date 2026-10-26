// async / await

function getUser(id) {
    return new Promise((resolve, reject) => {
        const users = [
            {id : 1, username: "user1"},
            {id : 2, username: "user2"},
            {id : 3, username: "user3"},
        ];
        //user.id === id) 이 유저가 참이면 user를 리턴
        const foundUser = users.find(user => user.id === id);

        if(!foundUser){
            reject(new Error("id와 일치하는 사용자가 존재하지 않습니다."));
            return;
        }
        resolve(foundUser);
    });
}

function getPostsByUserName(userName){
    return new Promise((resolve, reject) => {
        const posts = [
            {id:1, content: "내용1", username: "user1"},
            {id:2, content: "내용2", username: "user2"},
            {id:3, content: "내용3", username: "user3"},
            {id:4, content: "내용4", username: "user2"},
        ];
        const foundPosts = posts.filter(post => post.username === userName);
        if(!foundPosts.length){
            reject(new Error("해당 userName으로 검색된 게시글이 없습니다"));
            return;
        }
        resolve(foundPosts);
    });
}

let username= null;

getUser(2).
then(foundUser => {
    username = foundUser.username;

    //비동기여서 안에 내부 있어야 함
    getPostsByUserName(foundUser.username).then(foundPosts => {
        console.log(foundPosts);
    }).catch(console.error);

})
    .catch(console.error);

