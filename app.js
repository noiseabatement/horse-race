const btn = document.querySelector("#btn")
const stopBtn = document.querySelector("#stopBtn")

const horse_1_id = document.querySelector("#horse_1")
const horse_2_id = document.querySelector("#horse_2")
const horse_3_id = document.querySelector("#horse_3")
const horse_4_id = document.querySelector("#horse_4")
const horse_5_id = document.querySelector("#horse_5")
const horse_6_id = document.querySelector("#horse_6")

// const horse_1 = document.querySelector(".horse_1")
// const horse_2 = document.querySelector(".horse_2")
// const horse_3 = document.querySelector(".horse_3")
// const horse_4 = document.querySelector(".horse_4")
// const horse_5 = document.querySelector(".horse_5")
// const horse_6 = document.querySelector(".horse_6")


let timeAtHtml = document.querySelector("#time")
let time = 30;

function final(){
    time --
    timeAtHtml.textContent = `Time: ${time}`
}

function decrease(){
    setInterval(final,1000)
    if(time <= 0){
       btn.removeEventListener(decrease)
    }
    
}

function stop(){

    time = 30
}

function start(){
    horse_1_id.classList.add("horse_1")
    horse_2_id.classList.add("horse_2")
    horse_3_id.classList.add("horse_3")
    horse_4_id.classList.add("horse_4")
    horse_5_id.classList.add("horse_5")
    horse_6_id.classList.add("horse_6")

}

btn.addEventListener("click", start)
btn.addEventListener("click", decrease)

stopBtn.addEventListener("click", stop)
console.log(horses[0])








