console.log("main.js loaded");

// class User {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getName() {
//         console.log(this.name);
//     }

//     getAge() {
//         console.log(this.age);
//     }

// }

// class Admin extends User {
//     getSuperUser() {
//         console.log("Super User");
//     }
// }

function User(name,age) {
    this.name = name;
    this.age = age;
}

User.prototype.getName = function() {
    console.log(this.name);
}
User.prototype.getAge = function() {
    console.log(this.age);
}

function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.superUser = function() {
    console.log("Super User");
}





let obj = new User("Saksham",23);
let adminObj = new Admin("Super",123);