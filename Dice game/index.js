 let randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
document.querySelectorAll("img")[0].setAttribute("src",`/Dice game/images/dice${randomNumber1}.png`)



let randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);
document.querySelectorAll("img")[1].setAttribute("src",`/Dice game/images/dice${randomNumber2}.png`);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}