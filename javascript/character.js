gameMusic();

var startButton = document.querySelector("#startGame");
startButton.addEventListener('click', function startGame(){
    var nameOne = document.querySelector('#playerOneInput');
    var nameTwo = document.querySelector('#playerTwoInput');

    localStorage.setItem('playerOneName',nameOne.value);
    localStorage.setItem('playerTwoName',nameTwo.value);
});