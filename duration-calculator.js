(()=>{
    
const videoList = document.querySelectorAll('ytd-playlist-video-renderer span.ytd-thumbnail-overlay-time-status-renderer');

let sumHours = 0;
let sumMinutes =0;
let sumSeconds =0;
for(let i=0;i<videoList.length;i++)
{
    let time =  videoList[i].innerText.split(":")
    sumHours += time.length==3?parseInt(time[0]):0;    
    sumMinutes += time.length==3?parseInt(time[1]):parseInt(time[0]);    
    sumSeconds += time.length==3?parseInt(time[2]):parseInt(time[1]);    
}

let addToMinutes = parseInt(sumSeconds/60);
sumMinutes += addToMinutes;
sumSeconds -=  addToMinutes*60;

let addToHours = parseInt(sumMinutes/60);
sumHours += addToHours;
sumMinutes %= 60;
let result = sumHours+":"+sumMinutes+":"+sumSeconds; 

alert(result)
})();
