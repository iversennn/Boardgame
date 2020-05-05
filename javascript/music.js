var gameAudio = new Audio('./media/music/tavernNew.mp3');
var diceAudio = new Audio('./media/music/dice.wav');



/*---------- Mute/Play game music ------------------------------------------------------*/
function gameMusic(){
    gameAudio.volume=0.3;
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
      gameMusicPause();
    });

var playMusic = document.querySelector("#play");
    playMusic.addEventListener('click', function(){
      playMusic.style.display = 'none';
      muteMusic.style.display = 'block';
      gameMusic();
    });

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