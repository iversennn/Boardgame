function congratzToWinner(){
    var myText = document.querySelector('.winnerText');
    console.log(myText.innerHTML);
    if (localStorage.p1 > 28){
    myText.innerHTML = 'Congratulations ' + localStorage.playerOneName + '! You won the game!';
    console.log(myText);
    } else if (localStorage.p2 >28){
    myText.innerHTML = 'Congratulations ' + localStorage.playerTwoName + '! You won the game!';
    }
}
congratzToWinner();