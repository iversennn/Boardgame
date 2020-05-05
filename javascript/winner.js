function congratzToWinner(){
    var myText = document.querySelector('.winnerText');
    if (localStorage.p1 > 28){
    myText.innerHTML = '<h1>' + 'Congratulations player 1! You won the game!';
    } else if (localStorage.p2 >28){
    myText.innerHTML = '<h1>' + 'Congratulations player 2! You won the game!';
    }
}
congratzToWinner();