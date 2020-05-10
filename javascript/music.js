var gameAudio = new Audio('./media/music/tavernNew.mp3');
var diceAudio = new Audio('./media/music/dice.wav');
var kidsCheerAudio = new Audio('./media/music/kids_cheering.mp3');
var clappingAudio = new Audio('./media/music/clapping.mp3');
var evilAudio = new Audio('./media/music/evillaugh.mp3');
var dragonAudio = new Audio('./media/music/dragon.mp3');

if (localStorage.getItem('sound') === null){
    localStorage.setItem('sound','unMute')
};

if (localStorage.getItem('volume') === null){
    localStorage.setItem('volume','0.5')
};

/*---------- Mute/Play game music ------------------------------------------------------*/
function gameMusic(){
    gameAudio.loop=true;
    gameAudio.play();
}

function gameMusicPause(){
    gameAudio.pause();
};

var muteMusic = document.querySelector("#mute");
    muteMusic.addEventListener('click', function(){
      muteMusic.style.display = 'none';
      playMusic.style.display = 'block';
      localStorage.setItem('sound','mute')
      gameMusicPause();
    });

var playMusic = document.querySelector("#play");
    playMusic.addEventListener('click', function(){
      playMusic.style.display = 'none';
      muteMusic.style.display = 'block';
      localStorage.setItem('sound','unMute')
      gameMusic();
    });

if (localStorage.sound === 'mute'){
    muteMusic.style.display = 'none';
    playMusic.style.display = 'block';
    gameMusicPause();
} else if (localStorage.sound === 'unMute'){
    playMusic.style.display = 'none';
    muteMusic.style.display = 'block';
    gameMusic();
}

/*---------- Master volume ------------------------------------------------------*/
var volumeUp = document.querySelector("#volumeUp");
    volumeUp.addEventListener('click', function(){
        if (localStorage.volume < 1){
            var setVolume = Number(localStorage.volume) + 0.05;
            localStorage.volume = setVolume.toFixed(2);
            setMasterVolume();
        } if ( localStorage.volume > 0){
            playMusic.style.display = 'none';
            muteMusic.style.display = 'block';
        }
    });

var volumeDown = document.querySelector("#volumeDown");
    volumeDown.addEventListener('click', function(){
        if (localStorage.volume > 0.00){
            var setVolume = Number(localStorage.volume) - 0.05;
            localStorage.volume = setVolume.toFixed(2);  
            setMasterVolume();
        } if ( localStorage.volume == 0){
            muteMusic.style.display = 'none';
            playMusic.style.display = 'block';
        }
    });

function setMasterVolume(){
    gameAudio.volume = localStorage.volume;
    diceAudio.volume = localStorage.volume;
    kidsCheerAudio.volume = localStorage.volume;
    clappingAudio.volume = localStorage.volume;
    evilAudio.volume = localStorage.volume;
    dragonAudio.volume = localStorage.volume;
}
setMasterVolume();

/*---------- Dice sound ------------------------------------------------------*/

function diceSoundForGamePlay(){
    function diceSound(){
        diceAudio.play();
    }

    var playDiceSound = document.querySelector("#diceOne");
        playDiceSound.addEventListener('click', function(){
            diceSound();
        });

    var playDiceSound2 = document.querySelector("#diceTwo");
        playDiceSound2.addEventListener('click', function(){
            diceSound();
    });
}

/*---------- Kids cheering sound ------------------------------------------------------*/

function kidsCheering(){
    kidsCheerAudio.play();
    clappingAudio.play();
};

/*---------- Evil laugh sound ------------------------------------------------------*/

function evilLaugh(){
    evilAudio.play();
};

/*---------- Dragon sound ------------------------------------------------------*/

function dragonRoar(){
    dragonAudio.play();
};

