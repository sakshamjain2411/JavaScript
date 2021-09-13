console.log("Resource main.js Loaded");

//Constructor
function Book(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}

function Display(){

}

Display.prototype.add = function(book) {
    tableBody = document.getElementById('tableBody');
    let uiTemplate = `
    <tr>
        <th>1</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
    </tr> `;
    tableBody.innerHTML += uiTemplate;
}

Display.prototype.clear = function() {
    let addBook = document.getElementById('addBook');
    addBook.reset();
}

Display.prototype.validate = function(book) {
    if(book.name.length < 2 || book.author.length < 2 || !book.name.match(/[a-z]/i) ) {
        return false
    }
    else
        return true
}

Display.prototype.alertPopup = function(type) {
    console.log(type);
    let alert = document.getElementById('alert');
    console.log(alert);
    let alertTemplate;
    if(type == 'success') {
        alertTemplate = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Record Inserted!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    else {
        alertTemplate = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Record Entry Failed!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    alert.innerHTML += alertTemplate;
    setTimeout(() => {
        alert.innerHTML = '';
    }, 2000);
}

// Add Methods to Display Prototype


// Add Submit Event Listner addBook
let addBook = document.getElementById('addBook');
addBook.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let price = document.getElementById('bookPrice').value;

    let book = new Book(name, author, price);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.alertPopup('success');
    }
    else
        display.alertPopup('faliur');

    console.log(display);
}