console.log("main.js Loaded");
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// })

//Advance Cursor Animation
const cursorInner = document.querySelector(".cursor-inner");
const cursorOuter = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", e => {
    // console.log(e.pageX);
    cursorInner.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+e.pageX+"px;")
    cursorOuter.setAttribute("style", "top: "+(e.pageY - scrollY)+"px; left: "+e.pageX+"px;")
})

document.addEventListener("click", e => {
    console.log("Scroll" + (e.pageY - scrollY));
    console.log("Client" + e.clientY);
})

document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseenter', event => {
        cursorInner.classList.add('cursor-hover');
        cursorInner.classList.remove('cursor-inner');
        cursorOuter.classList.add('cursor-none');
        console.log(event)
    }),
    item.addEventListener('mouseleave', event => {
        cursorInner.classList.add('cursor-inner');
        cursorOuter.classList.remove('cursor-none');
        cursorInner.classList.remove('cursor-hover');
        console.log(event)
    })
  })