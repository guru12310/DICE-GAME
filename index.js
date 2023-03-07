var randomNumber = Math.floor(Math.random()*6)+1;

var randomdice = "D"+randomNumber+".png";

var randomimage = "IMAGES/"+randomdice;

var randomgene= document.querySelectorAll("img")[0];

randomgene.setAttribute("src",randomimage);

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomdice1 = "IMAGES/D"+randomNumber1+".png";


document.querySelectorAll("img")[1].setAttribute("src",randomdice1);

if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="💥PLAYER 1 IS WINNER";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="PLAYER 2 IS WINNER💥";
}
else{
    document.querySelector("h1").innerHTML="DRAW 🤩";
}