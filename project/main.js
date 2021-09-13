let count = 0;
let clickCountBtn = document.getElementById("clickCount");
clickCountBtn.addEventListener("click", () => {
    // count++;
    // console.log(count);
    // clickCountBtn.innerHTML = `Clicked ${count} times`;
    console.log(JSON.parse(localStorage.getItem("14139411605804920")));
})

let addEntryBtn = document.getElementById("addEntryBtn");
addEntryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let Amount = document.getElementById("entryAmount").value;
    let Type = document.getElementById("entryType").value;
    let Date = document.getElementById("entryDate").value;
    let entry = [Amount,Type,Date];
    entry=JSON.stringify(entry);
    console.log(entry);
    let id = 100000000000000000*Math.random();
    console.log(id);
    localStorage.setItem(id,entry);
    getData();
})

function getData() {
    console.log(localStorage.getItem("14139411605804920"));
}