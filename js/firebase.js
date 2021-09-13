// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfhIOnQWzNosJaH4ZXbIuToIFFA4M3Izk",
    authDomain: "javascript-1b385.firebaseapp.com",
    projectId: "javascript-1b385",
    storageBucket: "javascript-1b385.appspot.com",
    messagingSenderId: "517057363164",
    appId: "1:517057363164:web:966e61176667c1eff44819"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
let studentName, rno, section, gender;

document.getElementById('insert').onclick = function() {
    init();
    insert('students');
    fetch('students');
}

document.getElementById('fetch').onclick = function() {
    fetch('students');
}

function init() {
    studentName = document.getElementById('name').value;
    rno = document.getElementById('rno').value;
    section = document.getElementById('section').value;
    gender = document.getElementById('gender').value;
    console.log(studentName,rno,section,gender)
}

// function fetch(collection) {
//     tableBody = document.getElementById('tableBody');
//     tableBody.innerHTML = '';
//     database.collection(collection).get().then(row => {
//         row.forEach(rowItem => {
//             let dataTemplate = `
//             <tr>
//                 <td>${rowItem.data().StudentName}</td>
//                 <td>${rowItem.data().RollNo}</td>
//                 <td>${rowItem.data().Section}</td>
//                 <td>${rowItem.data().Gender}</td>
//             </tr> `;
//             tableBody.innerHTML += dataTemplate;
//         })
//     })
// }

// function insert(collection) {
//     database.collection(collection).add({
//         StudentName: studentName,
//         RollNo: rno,
//         Section: section,
//         Gender: gender
//     });
// }

// Select Query


class firebaseClass {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getData(collection) {
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';
        database.collection(collection).get().then(row => {
            row.forEach(rowItem => {
                let dataTemplate = `
                <tr>
                    <td>${rowItem.data().StudentName}</td>
                    <td>${rowItem.data().RollNo}</td>
                    <td>${rowItem.data().Section}</td>
                    <td>${rowItem.data().Gender}</td>
                </tr> `;
                tableBody.innerHTML += dataTemplate;
            })
        })
    }

    insertRecord(collection) {
        database.collection(collection).add({
            Username: username,
            Password: password
        })
    }
}

