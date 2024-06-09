let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["red","yellow","green","purple"];

let h2=document.querySelector('h2');
// let btn=document.querySelector('btn');

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
} 


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}



document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
})

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let randIdx=(Math.floor(Math.random()*3)+1);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnPress(){
    // console.log(this);
    btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute('id');
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(index){
    // console.log(`Current Level: ${level}`)
    // let index=level-1;
    if(userSeq[index]==gameSeq[index]){
        // console.log("Same Value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
    }
    else{
        h2.innerHTML=`Game Over! <b>Your Score was ${level}</b> <br>Press any key to start.`;
        console.log("Game Over")
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },200);
        reset();
    }
}

