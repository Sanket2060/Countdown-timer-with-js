
function settimer(){
let hr=document.getElementById("hr").value||00;
let min=document.getElementById("min").value||0;
let sec=document.getElementById("sec").value||0;
function resettimer(){ 
    alert("I am here");
    clearInterval(timerinterval);
    const d = new Date(0,0,0,0,0,0,0);
    document.body.getElementsByClassName("screendiv")[0].innerHTML=hr+":"+min+":"+sec;
}



let timerinterval=setInterval(function () {
    const d = new Date(0,0,0,hr,min,sec,0);
    document.body.getElementsByClassName("screendiv")[0].innerHTML=hr+":"+min+":"+sec;
    if (hr+min+sec==0){
        clearInterval(timerinterval);
    } 
    if (sec==0 && min!=0){
        min=min-1;
        sec=59;
    }
    else{
        sec=sec-1;
    }
    if (min==0 && hr!=0){
        hr=hr-1;
    }
}
    , 1000);
}


