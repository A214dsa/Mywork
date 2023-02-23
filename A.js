window.onload = function () {
    var seconds=00;
    var tens =00;
    var appendTens=document.getElementById("tens");
    var appendseconds = document.getElementById("sec");
    var buttonStart = document.getElementById('Start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Interval;
buttonStart.onclick=function(){
    clearInterval(Interval);
    Interval=setInterval(startTimer,10);
}
buttonStop.onclick=function(){
clearInterval(Interval);
}
buttonReset.onclick=function(){
clearInterval(Interval);
tens="00";
sec="00";
appendTens.innerHTML=tens;
appendseconds.innerHTML=sec;
}
function startTimer(){
    tens++;
    if(tens<=9){
        appendTens.innerHTML="0"+tens;
    }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        console.log("sec");
        sec++;
        appendseconds.innerHTML="0"+sec;
        tens=0;
        appendTens.innerHTML="0"+0;

    }
    if(seconds>9){
        appendseconds.innerHTML=sec;
    }
}
}