console.log("File Start");

async function getResponse() {
    // console.log("Inside Function");
    // const userData = await fetch("https://api.github.com/users");
    // console.log("Data Fetched");
    // console.log(userData.status);
    // const users = await userData.json();
    // console.log("Users Retrived");
    // return users;
    try {
        const userData = await fetch("https://api.github.com/users");
        const users = await userData.json();
        return users;
    } catch (error) {
        console.error(error);
    }
}

console.log("Before Call");
let response = getResponse();
console.log("After Call");
console.log(response);
response
    .then(data => {
        console.log(data);
    })
    .catch(() => {
        console.log("Some Error Occured");
    })
console.log("File End");



