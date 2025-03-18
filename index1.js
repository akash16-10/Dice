var n1=Math.floor(Math.random()*6)+1;
var tag=document.querySelector(".img1");
var fna="dice"+n1+".png";
tag.setAttribute("src","./images/"+fna);

var n2=Math.floor(Math.random()*6)+1;
var tag2=document.querySelector(".img2");
var fname2="dice"+n2+".png";
tag2.setAttribute("src","./images/"+fname2);
var win=document.querySelector("h1");

if(n1>n2)
    win.innerHTML="Player 1 Wins!! ";
else if (n1<n2)
    win.innerHTML="Player 2 Win!!";
else
    win.innerHTML="Match Tied !!";