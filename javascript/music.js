var audio = new Audio('./media/music/tavernNew.mp3');

function gameMusic(){
    audio.volume=0.3;
    audio.loop=true;
    audio.play();
}

function gameMusicPause(){
    audio.pause();
};