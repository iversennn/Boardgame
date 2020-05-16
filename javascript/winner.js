function congratzToWinner(){
    var myText = document.querySelector('#winnerText');
    var myName = document.querySelector('#winnerName');
    var myPicture = document.querySelector('#winnerPic')

    if (localStorage.p1 > 28){
    myText.innerHTML = 'Congratulations ' + localStorage.playerOneName + '! You won the game!';
    myName.innerHTML = localStorage.playerOneName;
    myPicture.style.backgroundImage = 'url("./' + localStorage.p1Picture + '")';
    } else if (localStorage.p2 >28){
    myText.innerHTML = 'Congratulations ' + localStorage.playerTwoName + '! You won the game!';
    myName.innerHTML = localStorage.playerTwoName;
    myPicture.style.backgroundImage = 'url("./' + localStorage.p2Picture + '")';
    }
}
setTimeout(function(){
    congratzToWinner();
    winnerSound();
    confetti.start();
    gameMusicPause();
    setTimeout(function(){
        gameMusic();
    }, 5000);
},100);
