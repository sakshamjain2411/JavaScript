//Constant Declarations
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const lapBtn = document.querySelector("#lap");
const resetBtn = document.querySelector("#reset");
const lapList = document.querySelector("#list");
const miliHolder = document.querySelector("#mili");
const secHolder = document.querySelector("#sec");
const minHolder = document.querySelector("#min");

//Variable Declaration
let mili = 0;
let sec = 0;
let min = 0;
let timer;
startBtn.addEventListener("click", () => {
    timer = setInterval(() => {
        mili++;
        if(mili > 99) {
            mili = 0;
            sec++;
            if(sec > 59) {
                sec = 0;
                min++;
            }
        }
        updateTimer(min,sec,mili);
    }, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
    resetBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    startBtn.disabled = false;
    resetBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
});

lapBtn.addEventListener("click", () => {
    let newNode = document.createElement("li");
    updateLapList(newNode,min,sec,mili);
});

resetBtn.addEventListener("click", () => {
    mili = 0;
    sec = 0;
    min = 0;
    miliHolder.innerText = "00";
    secHolder.innerText = "00";
    minHolder.innerText = "00";
    lapList.innerHTML = "";
    resetBtn.disabled = true;
})

function updateTimer(min,sec,mili) {
    miliHolder.innerHTML = mili;
    if(sec < 10) {
        secHolder.innerText = "0"+sec;
    } else {
        secHolder.innerText = sec;
    };
    if(min < 10) {
        minHolder.innerText = "0"+min;
    } else {
        minHolder.innerText = min;
    };
};

function updateLapList(newNode, min, sec, mili) {
    if(min < 10 ) {
        min = "0"+min;
    }
    if(sec < 10) {
        sec = "0"+sec;
    }
    if(mili < 10) {
        mili = "0"+mili;
    }
    newNode.innerText = min+":"+sec+":"+mili;
    lapList.appendChild(newNode);
}