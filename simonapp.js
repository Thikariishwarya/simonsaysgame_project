let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false)
    {
      console.log("game started");
      started=true;
      levelUp();
    }
})
let h2=document.querySelector("h2");
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let ranbtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(ranbtn);
}
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
      btn.classList.remove("gameflash");
    },250);
}

function checkAns(ind){
if(userseq[ind]===gameseq[ind])
{
    if(userseq.length==gameseq.length)
    {
    console.log("same and level up");
    setTimeout(levelUp(),1000);
}}
else{
    h2.innerHTML=`game over! Your score is <b>${level-1}</b><br> Press any key to Start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
       document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
      btn.classList.remove("userflash");
    },250);
}

function btnPress(){
  let btn=this;
  userColor=btn.getAttribute("id")
  userFlash(btn);
  userseq.push(userColor);
  checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}