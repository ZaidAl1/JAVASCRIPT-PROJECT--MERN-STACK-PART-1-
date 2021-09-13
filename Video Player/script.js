const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


function toggleVideoStatus(){
    if(video.paused){
        video.play();
            }
}

function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fab fa-google-play fa-2x"></i>' 
    }    else {
            play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
        }
    
}

function updateProgress(){
console.log(video.currentTime);
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress(){
    return true;
}




video.addEventListener('click ', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress );

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change',setVideoProgress);