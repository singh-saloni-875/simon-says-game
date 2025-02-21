let gameSeq = [];
let userSeq = [];

let btns = ["red","orange","green","purple"];

let startGame = false;
let level = 0;

// h2 value update
let h2 = document.querySelector("h2");

// when we click or press any button then game started   
document.addEventListener("keypress", function () {
    if (startGame == false) {
        console.log("game started!" );
    
        startGame = true;
        levelup();// when game started call level up & up the level
    } 
});

// level up after starting
function btnFlash(btn){
    btn.classList.add("flash"); // in btn add btn-flash class to flash white sometime 
    // a time we set then after that time remove flash class
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}
function levelup() {
    //userseq set empty so no. of level user have, press same count of number
    userSeq = []; 

    level++;
    h2.innerText = `Level ${level}`;
    //random color index no. we generate for flash 
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx]; //color class btn we have to access
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn); // a function 
}


//track the level coz each level has it own color,function to check user and gameseq color are same or mismatch
function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
           setTimeout(levelup, 1000); // when we press right key it level up
        }
    }else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}


//button pressed
function btnPress() { //it is function
    let btn = this; 
    btnFlash(btn);  // btn was flashed when user click

    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){ //
    btn.addEventListener("click", btnPress ) //add press function pass as callback in this eventListener
}
 
//reset function
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}