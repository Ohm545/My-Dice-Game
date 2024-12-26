
var randomnumber1=Math.floor(Math.random()*6)+1;
var image1="./images/"+"dice"+randomnumber1+".png";
var randomnumber2=Math.floor(Math.random()*6)+1;
var image2="./images/"+"dice"+randomnumber2+".png";
var image11=document.querySelectorAll("img")[0];
var image12=document.querySelectorAll("img")[1];
image11.setAttribute("src",image1);
image12.setAttribute("src",image2);
var winner= (randomnumber1 > randomnumber2) ? randomnumber1 : randomnumber2;
if(winner==randomnumber1 && winner!=randomnumber2 )
{
    var mywinner=document.getElementsByTagName("p")[1];
    mywinner.textContent="The Winner Of the Game is Palyer1";

}
else if(winner=randomnumber2 && winner!=randomnumber1)
{
    var mywinner=document.getElementsByTagName("p")[1];
    mywinner.textContent="The Winner Of the Game is Palyer2";
}
else
{
    var mywinner=document.getElementsByTagName("p")[1];
    mywinner.textContent="Both Have Equal Scores.";
}