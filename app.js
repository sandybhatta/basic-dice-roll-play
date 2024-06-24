let buttons=document.querySelectorAll("div>button");
let calc=document.querySelector("#calc");
let inputs=document.querySelectorAll("input");
let players=[]
calc.disabled=true;
for(let button of buttons){
    button.addEventListener("click",rolldice )
}
let scoreArr=document.querySelectorAll(".score")
let arr=[];
let highestScoreNow=0;
let calcChecker=0;
function rolldice(e){
    calcChecker++
    e.target.disabled=true;
    let clickedInd= +(e.target.id.slice(e.target.id.length-1));
    let randomDice=parseInt((Math.random()*6)+1);
    scoreArr[clickedInd-1].innerText=randomDice;
    arr[clickedInd-1]=randomDice;
    players[clickedInd-1]=inputs[clickedInd-1].value;
    highestScoreNow=Math.max(randomDice,highestScoreNow);
    if(calcChecker===buttons.length){
        calc.disabled=false;
    }
    console.log(players);
}
calc.addEventListener("click", highestScore);
function highestScore(){
    let winners=[];
  for(let i =0;i<arr.length;i++){
    if(arr[i]===highestScoreNow){
    winners.push(players[i]);
    }
  }
  let message=document.querySelector("#winMessage")
  message.innerText=winners.join(" ")+" wins"
}
let reset=document.querySelector("#reset");
reset.addEventListener("click", resetsBack);
function resetsBack(){
    calc.disabled=true;
    buttons.forEach((value)=>{
        value.disabled=false;
    })
}