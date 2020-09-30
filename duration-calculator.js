function GetDuration()
{
var array = $$('span.ytd-thumbnail-overlay-time-status-renderer')
var sumHours = 0;
var sumMminutes =0;
var sumSeconds =0;
for(let i=0;i<array.length;i++)
{
    var time =  array[i].innerText.split(":")
    sumHours += time.length==3?parseInt(time[0]):0;    
    sumMminutes += time.length==3?parseInt(time[1]):parseInt(time[0]);    
    sumSeconds += time.length==3?parseInt(time[2]):parseInt(time[1]);    
}

var addToMinutes = parseInt(sumSeconds/60);
sumMminutes += addToMinutes;
sumSeconds -=  addToMinutes*60;

var addToHours = parseInt(sumMminutes/60);
sumHours += addToHours;
sumMminutes =  sumMminutes%60;
var result = sumHours+":"+sumMminutes+":"+sumSeconds; 
console.log(result)
alert(result)
}

GetDuration();
