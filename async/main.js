console.log("main.js loaded");

const apiKey = '5cfc9ef88979c97bf6ddcf86754d3c40';
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

let httpRequest = new XMLHttpRequest();

// function get(url, success, fail) {
//     httpRequest.open('GET', url);
//     httpRequest.send();
//     httpRequest.onload = function () {
//         if(httpRequest.status === 200) {
//             success(httpRequest.responseText);
//         }
//         else {
//             fail(httpRequest.status);
//         }
//     }
// }

function get(url) {
    return new Promise(function (resolve,reject) {
        httpRequest.open('GET', url);
        httpRequest.send();
        httpRequest.onload = function () {
            if(httpRequest.status === 200) {
                resolve(httpRequest.responseText);
            }
            else {
                reject(httpRequest.status);
            }
        }
    })
}

function successHandler(data) {
    const objData = JSON.parse(data);
    console.log(objData);
    document.querySelector('h1').innerText = objData.weather[0].description;
}

function faliourHandler(data) {
    document.querySelector('h1').innerText = data;
    console.log(data);
}

get(url)
    .then((response) => {
        console.log("Inside Then")
        successHandler(response);
    })
    .catch((response) => {
        console.log("Inside Catch")
        console.log(response);
    })
    .finally(()=> {
        console.log("Inside Finally")
    });
// setTimeout(() => {
//     successHandler(httpRequest.responseText);
// }, 3001);