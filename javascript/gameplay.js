fetch("./json/gameplay.json")
.then(response => {
  response.json().then(jsonResult => {
    var boardCanvas = document.querySelector("#canvas");
    boardCanvas.width = 1450;
    boardCanvas.height = 800;
    var ctx = boardCanvas.getContext("2d");

    console.log(jsonResult);

    var x = jsonResult.coordinatesArrayX;
    var y = jsonResult.coordinatesArrayY;
    localStorage.setItem('p1','0');
    localStorage.setItem('p2','0');

//------------------------------------------------ Draw Players ------------------------------------------------------

    function drawPlayerOne(){
      var characterOneImage = new Image();
      characterOneImage.src = jsonResult.characters.player1.url[0];
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0]-90,y[0]-100,150,150);
      };
    }
    drawPlayerOne();

    function drawPlayerTwo(){
      var characterTwoImage = new Image();
      characterTwoImage.src = jsonResult.characters.player2.url[0];
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[1]-90,y[1]-100,150,150);
      };
    }
    drawPlayerTwo();

//------------------------------------------------ Move Players ------------------------------------------------------

    function movePlayerOne(){
      playerOnePlacement = Number(localStorage.p1);

      ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
      ctx.clearRect(x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);

      var characterOneImage = new Image();
      characterOneImage.src = jsonResult.characters.player1.url[0];
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);

      p1TrapTile6();
      p1LuckyTile12();
      p1LuckyTile16();
      p1TrapTile25();
      ifPlayerOneWin();

      };
    };

    function movePlayerTwo(){
      playerTwoPlacement = Number(localStorage.p2);

      //ctx.clearRect(x[0+playerTwoPlacement]-90,y[0+playerTwoPlacement]-100,150,150);

      var characterTwoImage = new Image();
      characterTwoImage.src = jsonResult.characters.player2.url[0];
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[0+1+playerTwoPlacement]-90,y[0+1+playerTwoPlacement]-100,150,150);
      
      p2TrapTile6();
      p2LuckyTile12();
      p2LuckyTile16();
      p2TrapTile25();
      ifPlayerTwoWin();

      };
    };
    

//------------------------------------------------ Dice Roll ------------------------------------------------------

    function diceRollOne(){
      var myDice = document.querySelector("#diceOne");
      sides = 6;
      random = Math.floor(Math.random() * this.sides) + 1;
      myDice.innerHTML = '<h1>' + random;

      localStorage.p1 = Number(localStorage.p1)+random;

      movePlayerOne(random);
      hideDice();
    }

    function diceRollTwo(){
      var myDice = document.querySelector("#diceTwo");
      sides = 6;
      random = Math.floor(Math.random() * this.sides) + 1;
      myDice.innerHTML = '<h1>' + random;

      localStorage.p2 = Number(localStorage.p2)+random;

      movePlayerTwo(random);
      hideDice();
    }

    
    var diceOne = document.querySelector("#diceOne");
    diceOne.addEventListener('click', function(){
      diceRollOne();
    });

    var diceTwo = document.querySelector("#diceTwo");
    diceTwo.addEventListener('click', function(){
      diceRollTwo();
    });

//------------------------------------------------ Traps/Lucky ---------------------------------------------------------

    function p1TrapTile6(){
      if (localStorage.p1 == 5){
        alert("Oh no! you hit tile 6 :( move back to tile 2!");
        localStorage.p1 = 1;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[2]-90,y[2]-100,150,150);
        };
      };
    };

    function p2TrapTile6(){
      if (localStorage.p2 == 5){
        alert("Oh no! you hit tile 6 :( move back to tile 2!");
        localStorage.p2 = 1;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[2]-90,y[2]-100,150,150);
        };
      };
    };

    function p1TrapTile25(){
      if (localStorage.p1 == 24){
        alert("Oh no! you hit tile 25 :( move back to tile 21!");
        localStorage.p1 = 20;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[21]-90,y[21]-100,150,150);
        };
      };
    };

    function p2TrapTile25(){
      if (localStorage.p2 == 24){
        alert("Oh no! you hit tile 25 :( move back to tile 21!");
        localStorage.p2 = 20;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[21]-90,y[21]-100,150,150);
        };
      };
    };

    function p1LuckyTile12(){
      if (localStorage.p1 == 11){
        alert("Yeii, you hit tile 12! Move to tile 15!");
        localStorage.p1 = 14;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[15]-90,y[15]-100,150,150);
        };
      };
    };

    function p2LuckyTile12(){
      if (localStorage.p2 == 11){
        alert("Yeii, you hit tile 12! Move to tile 15!");
        localStorage.p2 = 14;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[15]-90,y[15]-100,150,150);
        };
      };
    };

    function p1LuckyTile16(){
      if (localStorage.p1 == 15){
        alert("Yeii, you hit tile 16! Move to tile 20!");
        localStorage.p1 = 19;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[20]-90,y[20]-100,150,150);
        };
      };
    };

    function p2LuckyTile16(){
      if (localStorage.p2 == 15){
        alert("Yeii, you hit tile 16! Move to tile 20!");
        localStorage.p2 = 19;

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[20]-90,y[20]-100,150,150);
        };
      };
    };

//------------------------------------------------ Switch turn ---------------------------------------------------------

    /*function hideDice(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');
      
      if (myDiceOne.style.display === 'block'){
        myDiceOne.style.display = 'none'
        myDiceTwo.style.display = 'block'
      } else if (myDiceTwo.style.display === 'block'){
        myDiceOne.style.display = 'block'
        myDiceTwo.style.display = 'none'
      }
    };*/

    function hideDice(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');

      console.log(myDiceOne.style);
      
      if (myDiceOne.style.pointerEvents === 'auto'){
        myDiceOne.style.pointerEvents = 'none';
        myDiceTwo.style.pointerEvents = 'auto';

        myDiceOne.classList.remove('diceShadow');
        myDiceTwo.classList.add('diceShadow');

      } else if (myDiceTwo.style.pointerEvents === 'auto'){
        myDiceOne.style.pointerEvents = 'auto';
        myDiceTwo.style.pointerEvents = 'none';
        
        myDiceOne.classList.add('diceShadow');
        myDiceTwo.classList.remove('diceShadow');
      }
    };

//------------------------------------------------ Winner ---------------------------------------------------------

    function ifPlayerOneWin(){
      if (localStorage.p1 > 28){
        alert("Player one got home safely!");
        window.location = './winner.html';
      }
    }

    function ifPlayerTwoWin(){
      if (localStorage.p2 > 28){
        alert("Player two got home safely!");
        window.location = './winner.html';
      }
    }

  })
});

