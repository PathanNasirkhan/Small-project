// Audio
const audio=new Audio("/alaram img/Funny Wake Up.mp3");

// For Minutes:
let mins=document.getElementById('mins');
for(let i=0;i<60;i++){
    mins.innerHTML=mins.innerHTML+`<option value="${i}" id="">${i}</option>`;
}

// For secs

let secs=document.getElementById('secs');
for(let i=0;i<60;i++){
    secs.innerHTML=secs.innerHTML+`<option value="${i}" id="">${i}</option>`;
}

// For Hours
let hours=document.getElementById('hours');
for(let i=0;i<24;i++){
    hours.innerHTML=hours.innerHTML+`<option value="${i}" id="">${i}</option>`;
}

// Timer
let timer= new Date();
let year=timer.getFullYear();
let month=timer.getMonth()+1;
let date=timer.getDate();

// Real time
let rtime;
let realTime=document.getElementById('rTime');

setInterval(()=>{
    rtime=new Date();
    realTime.innerHTML=rtime;
},1000);

// Audio
let para=document.getElementById('para');
function bell(){
    audio.play();
    setTimeout(()=>{
        img.src="/alaram img/alaram clock.png";
        para.innerHTML="Ghanti";  
    },1000);
}

const setAlaram=document.getElementById('btn');
const img=document.getElementById('imgbox');
let alaramDate;
setAlaram.addEventListener("click",()=>{
     alaramDate=new Date(`${year}-${month}-${date} ${hours.value}:${mins.value}:${secs.value}`);
     
    let timeforAlaram=new Date();

    let alaramTime = alaramDate-timeforAlaram;

    console.log(alaramTime);
    console.log(alaramDate);

    if(alaramTime>=0){
        alert('Alaram set');
    }else{
        alert('set valid time');
    }
    if(alaramTime>=0){
        setTimeout(()=>{
            bell();
            img.src="/alaram img/wakeup.gif";
        },alaramTime);
    }
});

// clear alaram
let clearAlaram=document.getElementById('clearAlaram');

clearAlaram.addEventListener('click',()=>{
    audio.pause();
    alert("Alaram cleared");
    img.src="/alaram img/alaram clock.png";
    
});