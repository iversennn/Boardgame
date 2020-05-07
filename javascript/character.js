/*---------- Start button ------------------------------------------------------*/

var startButton = document.querySelector("#startGame");
startButton.addEventListener('click', function startGame(){
    var nameOne = document.querySelector('#playerOneInput');
    var nameTwo = document.querySelector('#playerTwoInput');

    localStorage.setItem('playerOneName',nameOne.value);
    localStorage.setItem('playerTwoName',nameTwo.value);

    localStorage.p1Picture = localStorage.p1Picture.toString().substring(5,37);
    localStorage.p2Picture = localStorage.p2Picture.toString().substring(5,37);
});

/*---------- Select player details ------------------------------------------------------*/
fetch("./json/gameplay.json")
.then(response => {
  response.json().then(jsonResult => {
    var p1 = jsonResult.characters.player1;
    var p2 = jsonResult.characters.player2;
    var p1Picture = document.querySelector('#p1picture');
    var p2Picture = document.querySelector('#p2picture');

    p1Picture.style.backgroundImage = p1.url[0];
    p2Picture.style.backgroundImage = p2.url[0];

    localStorage.setItem('p1Picture',p1.url[0]);
    localStorage.setItem('p2Picture',p2.url[0]);

/*---------- Player 1 ------------------------------------------------------*/
    /*---------- Picture ------------------------------------------------------*/
    var p1nextButton = document.querySelector('#p1nextButton');
    var p1prevButton = document.querySelector('#p1prevButton');
    p1i = 0;

    p1nextButton.addEventListener('click', function(){
        if (p1i < p1.url.length-1){
            p1i++;
            p1Picture.style.backgroundImage = p1.url[p1i];
            localStorage.p1Picture = p1.url[p1i];
        } else {
            p1i = 0;
            p1Picture.style.backgroundImage = p1.url[p1i];
            localStorage.p1Picture = p1.url[p1i];
        }
    });

    p1prevButton.addEventListener('click', function(){
        if (p1i > 0){
            p1i--;
            p1Picture.style.backgroundImage = p1.url[p1i];
            localStorage.p1Picture = p1.url[p1i];
        } else {
            p1i = p1.url.length-1;
            p1Picture.style.backgroundImage = p1.url[p1i];
            localStorage.p1Picture = p1.url[p1i];
        }
    });
    /*----------- Name ------------------------------------------------------*/
    var p1nameButton = document.querySelector('#p1selectButton');
    var p1nameInput = document.querySelector('#playerOneInput');
    p1n = 0;

    p1nameButton.addEventListener('click', function(){
        if(p1n < p1.name.length-1){
            p1n++;
            p1nameInput.value = p1.name[p1n];
        } else{
            p1n = 0;
            p1nameInput.value = p1.name[p1n];
        }
    });

/*---------- Player 2 ------------------------------------------------------*/
    /*---------- Picture ------------------------------------------------------*/
    var p2nextButton = document.querySelector('#p2nextButton');
    var p2prevButton = document.querySelector('#p2prevButton');
    p2i = 0;

    p2nextButton.addEventListener('click', function(){
        if (p2i < p2.url.length-1){
            p2i++;
            p2Picture.style.backgroundImage = p2.url[p2i];
            localStorage.p2Picture = p2.url[p2i];
        } else {
            p2i = 0;
            p2Picture.style.backgroundImage = p2.url[p2i];
            localStorage.p2Picture = p2.url[p2i];
        }
    });

    p2prevButton.addEventListener('click', function(){
        if (p2i > 0){
            p2i--;
            p2Picture.style.backgroundImage = p2.url[p2i]; 
            localStorage.p2Picture = p2.url[p2i];
        } else {
            p2i = p2.url.length-1;
            p2Picture.style.backgroundImage = p2.url[p2i];
            localStorage.p2Picture = p2.url[p2i];
        }
    });
    /*----------- Name ------------------------------------------------------*/
    var p2nameButton = document.querySelector('#p2selectButton');
    var p2nameInput = document.querySelector('#playerTwoInput');
    p2n = 0;

    p2nameButton.addEventListener('click', function(){
        if(p2n < p1.name.length-1){
            p2n++;
            p2nameInput.value = p2.name[p2n];
        } else{
            p2n = 0;
            p2nameInput.value = p2.name[p2n];
        }
    });
    })
});