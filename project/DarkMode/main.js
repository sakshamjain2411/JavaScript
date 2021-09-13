console.log("js loaded");
let toggle = document.querySelector("#darkModeToggle");
toggle.addEventListener('click', () => {
    console.log(toggle);
    if(toggle.value == 'false') {
        document.querySelector('body').classList.add("dark");
        toggle.value = 'true';
    }
    else {
        document.querySelector('body').classList.remove("dark");
        toggle.value = 'false';
    }
})
console.log(toggle);