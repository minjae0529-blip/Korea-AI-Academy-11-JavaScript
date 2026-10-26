async function getRequest() {
    try {
        const response = await fetch("http://localhost:8080/servlet_study_war_exploded/first");
        const responseData = await response.text();
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }

}

getRequest();

function getRequest2() {
    fetch("http://localhost:8080/servlet_study_war_exploded/first")   // ; 제거
        .then((response) => {
            response.text()          // Response 객체 (상태 코드, 헤더 등)
                .then(responseData => {
                    console.log(responseData);
                })
        })
}

getRequest2();