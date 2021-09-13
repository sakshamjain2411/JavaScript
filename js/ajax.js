console.log('Ajax.js Loaded');

let fetchButton = document.getElementById('fetchBtn');
fetchButton.addEventListener('click', fetchData);

function fetchData() {
    console.log('Fetch Btn Clicked');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onprogress = function(){
        console.log('GET In Progress');
    }

    xhr.onload = function(){
        let response = JSON.parse(this.response);
        // console.log(response);

    }

    xhr.send();
}

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', postData);

function postData() {
    console.log('Post Btn Clicked');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json')

    xhr.onprogress = function(){
        console.log('POST In Progress');
    }

    xhr.onload = function(){
        console.log(this.response);
    }

    let params = `{"name":"saksham","salary":"123","age":"23"}`;
    xhr.send();
}