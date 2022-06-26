sound = "WAKE_UP.mp3";

if(objects[0]=!"person"){
    document.getElementById("status"),innerHTML = "Baby Not Detected";
    sound.play();
}
else{
    document.getElementById("status"),innerHTML = "Baby Detected";
    sound.stop();  
}

else if(objects < 0){
    document.getElementById("status"),innerHTML = "Baby Detected";
    sound.stop();
}