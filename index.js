const word = document.querySelector("#random-word");
const typed = document.querySelector("#typed");
const scoreD = document.querySelector("#score");
const timeD = document.querySelector("#timer");
const msg = document.querySelector("#msg");

let score = 0;
function Score(){
    score++;
    scoreD.innerHTML = score;
}


let time = 6;
function countdown(){
    time--;
    timeD.innerHTML = time;
    if (time <= -1){
        time = 6;
        alert("Game over!!!!!!!!")
    }
}

setInterval(countdown,1000)


let words = [
    "Hello",
    "Bye",
    "Aditya",
    "Rajdeep",
    "Ishan",
    "Sachin",
    "Harshit",
    "Sapan",
    "Coffe",
    "Car",
    "Book"
]


let rd = Math.floor(Math.random() * words.length);
word.innerHTML = words[rd].toLowerCase();


// let node = document.createTextNode(words[rd]);
// word.appendChild(node);


function chn(e){
    if(typed.value === word.innerHTML)
        {
            msg.innerHTML = "Correct"
            rd = Math.floor(Math.random() * words.length);
            word.innerHTML = words[rd].toLowerCase();
            typed.value = ""
            Score();
            time = 6;
         
        }
    else{
        msg.innerHTML = "Incorrect!!!"
    }
}

typed.addEventListener('input',chn);





