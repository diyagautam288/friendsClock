var wakeUp=7;
var noon=12;
var lunch=12;
var evening=18;
var nap=lunch+2;
var party;
var currentTime=function()
{
    var clock=document.getElementById('clock');
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var meridian="AM";
    if(h>=noon)
        {
            meridian="PM";
        }
    if(h>noon)
        {
            h=h-12;
        }
    if(m<10)
        {
            m="0"+m;
        }
    if(s<10)
        {
            s="0"+s;
        }
    var clockTime=h+":"+m+":"+s+" "+meridian;
    clock.innerText= clockTime; 
};
var update=function()
{
    var Time=new Date().getHours();
    var msg;
    var img="A.jpg";
    var timeEvent=document.getElementById("TimeEvent");
    var frndImg=document.getElementById("friendImage");
    if(Time==party)
        {
            img="Party.jpeg";
            msg="It's Party Time Baby!!";
        }
    else if(Time==wakeUp)
        {
            img="Wakeup.jpg";
            msg="WakeUp WakeUp WakeUp!!!!"
        }
    else if(Time==lunch)
        {
            img="lunch.jpg";
            msg="Have your lunch before Joey eat it all";
        }
     else if(Time==nap)
        {
            img="Nap.jpg";
            msg="Good night friends!!";
        }
     else if(Time<noon)
        {
            img="morning.jpeg";
            msg="Morning's here.....";
        }
    else if(Time>=evening)
        {
            img="evening.jpeg";
            msg="Good Evening! Leave The Central Park";
        }
    else
        {
            img="afternoon.jpeg";
            msg="Good Afternoon! Let's go to The Central Park";
        }
    console.log(msg);
    timeEvent.innerText=msg;
    frndImg.src=img;
    currentTime();
};
update();
var oneSecond=1000;
setInterval(update,oneSecond);
var partyButton=document.getElementById("PartyTime");
var partyEvent=function()
{
    if(party<0)
        {
            party=new Date().getHours();
            partyButton.innerText="Party Over!!";
            partyButton.style.backgroundColor="#0A8DAB";
        }
    else{
        party=-1;
        partyButton.innerText="Party Time";
        partyButton.style.backgroundColor="#222";
    }
};
partyButton.addEventListener("click",partyEvent);
partyEvent();
var wakeUpTime=document.getElementById("wakeUpTime");
var WakeUpTimeEvent=function()
{
    wakeUp=wakeUpTime.value;
};
wakeUpTime.addEventListener("change",WakeUpTimeEvent);
var LunchTime=document.getElementById("LunchTime");
var LunchTimeEvent=function()
{
    lunch=LunchTime.value;
}
LunchTime.addEventListener("change",LunchTimeEvent);
var napTime=document.getElementById("napTime");
var napTimeEvent=function()
{
    nap=napTime.value;
}
napTime.addEventListener("change",napTimeEvent);