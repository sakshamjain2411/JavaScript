class student {
    constructor(id , name) {
        this.id = id;
        this.name = name;
    }

    greet() {
        console.log(`Greeting ${this.name}`);
    }
}

let obj = new student(1,'Saksham');

let teacher = {
    id : 011,
    name : 'Shikha Bhargav',
    teach: function() {
        return `${this.name} is teaching`;
    }
}

let body = document.getElementById('testBody');
console.log(body);
window.addEventListener("scroll" , getScrollPosition)

function getScrollPosition() {  
    console.log('Something')
}

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    console.log(scroll);
    var element = document.getElementById("custom-header");
    // if(scroll > 700)
    // {
    //     element.classList.add("black");
    // }
    // else
    // {
    //     element.classList.remove("black");
    // }
});