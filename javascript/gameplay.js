fetch("./json/gameplay.json")
.then(response => {
  response.json().then(jsonResult => {
    var boardCanvas = document.querySelector("#canvas");
    boardCanvas.width = 1450;
    boardCanvas.height = 800;
    var ctx = boardCanvas.getContext("2d");
    //console.log(jsonResult);

    var x = jsonResult.coordinatesArrayX;
    var y = jsonResult.coordinatesArrayY;
    localStorage.setItem('p1','0');
    localStorage.setItem('p2','0');
    localStorage.setItem('diceRollOne','0');
    localStorage.setItem('diceRollTwo','0');

    gameMusic();

//------------------------------------------------ Draw Players ------------------------------------------------------

    function drawPlayerOne(){
      var characterOneImage = new Image();
      characterOneImage.src = jsonResult.characters.player1.url[0];
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0]-90,y[0]-100,150,150);
      };
    };
    drawPlayerOne();

    function drawPlayerTwo(){
      var characterTwoImage = new Image();
      characterTwoImage.src = jsonResult.characters.player2.url[0];
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[1]-90,y[1]-100,150,150);
      };
    };
    drawPlayerTwo();

    function showPlayerOne(){
      var characterOneImage = new Image();
      characterOneImage.src = jsonResult.characters.player1.url[0];
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[1+Number(localStorage.p1)]-90,y[1+Number(localStorage.p1)]-100,150,150);
      };
    };

    function showPlayerTwo(){
      var characterTwoImage = new Image();
      characterTwoImage.src = jsonResult.characters.player2.url[0];
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[1+Number(localStorage.p2)]-90,y[1+Number(localStorage.p2)]-100,150,150);
      };
    };

//------------------------------------------------ Move Players ------------------------------------------------------

    function movePlayerOne(){
      var playerOnePlacement = Number(localStorage.p1);

      ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);

      var characterOneImage = new Image();
      characterOneImage.src = jsonResult.characters.player1.url[0];
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);

      showPlayerTwo();
      ifPlayerOneWin();
      playerOneAnotherTurn();
      p1TrapTile6();
      p1LuckyTile12();
      p1LuckyTile16();
      p1TrapTile25();
      };
    };

    function movePlayerTwo(){
      var playerTwoPlacement = Number(localStorage.p2);

      ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);

      var characterTwoImage = new Image();
      characterTwoImage.src = jsonResult.characters.player2.url[0];
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[0+1+playerTwoPlacement]-90,y[0+1+playerTwoPlacement]-100,150,150);
      
      showPlayerOne();
      ifPlayerTwoWin();
      playerTwoAnotherTurn();
      p2TrapTile6();
      p2LuckyTile12();
      p2LuckyTile16();
      p2TrapTile25();
      };
    };
    

//------------------------------------------------ Dice Roll ------------------------------------------------------

    function diceRollOne(){
      
      var myDice = document.querySelector("#diceOne");
        sides = 6;
        random = Math.floor(Math.random() * this.sides) + 1;

      function showRollOne(){
        myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + random;
        localStorage.setItem('diceRollOne',random);

        localStorage.p1 = Number(localStorage.p1)+random;
        myDice.style.pointerEvents = 'auto';

        movePlayerOne(random);
        hideDice();
      };

      function one() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '2';
            showRollOne();
        }, 300)
      }

      function two() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '5';
            one();
        }, 300)
      }

      function three() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '4';
            two();
        }, 300)
      }

      function four() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '6';
            three();
        }, 300)
      }

      function five() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '3';
            four();
        }, 300)
      }

      function six() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '1';
            five();
        }, 300)
      }

      function seven() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '4';
            six();
        }, 300)
      }

      function eight() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '6';
            seven();
        }, 300)
      }

        eight();
        myDice.style.pointerEvents = 'none';
      };

    function diceRollTwo(){
      var myDice = document.querySelector("#diceTwo");
      sides = 6;
      random = Math.floor(Math.random() * this.sides) + 1;
      
      function showRollTwo(){
        myDice.innerHTML = '<p>' + 'Player 2' + '<h1>' + random;
        localStorage.setItem('diceRollTwo',random);

        localStorage.p2 = Number(localStorage.p2)+random;
        myDice.style.pointerEvents = 'auto';

        movePlayerTwo(random);
        hideDice();
      }

      function one() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '2';
            showRollTwo();
        }, 300)
      }

      function two() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '5';
            one();
        }, 300)
      }

      function three() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '4';
            two();
        }, 300)
      }

      function four() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '6';
            three();
        }, 300)
      }

      function five() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '3';
            four();
        }, 300)
      }

      function six() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '5';
            five();
        }, 300)
      }

      function seven() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '1';
            six();
        }, 300)
      }

      function eight() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + 'Player 1' + '<h1>' + '4';
            seven();
        }, 300)
      }

        eight();
        myDice.style.pointerEvents = 'none';
    }

    
    var diceOne = document.querySelector("#diceOne");
    diceOne.addEventListener('click', function(){
      diceRollOne();
    });

    var diceTwo = document.querySelector("#diceTwo");
    diceTwo.addEventListener('click', function(){
      diceRollTwo();
    });

//------------------------------------------------ If dice Roll = 6 ------------------------------------------------------

    function playerOneAnotherTurn(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');

      if (localStorage.diceRollOne == 6){
        alert('Player one rolled a 6 and gets another turn!')
        myDiceOne.style.pointerEvents = 'auto';
        myDiceTwo.style.pointerEvents = 'none';
        
        myDiceOne.classList.add('diceShadow');
        myDiceTwo.classList.remove('diceShadow');
      }
    }

    function playerTwoAnotherTurn(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');

      if (localStorage.diceRollTwo == 6){
        alert('Player two rolled a 6 and gets another turn!')
        myDiceOne.style.pointerEvents = 'none';
        myDiceTwo.style.pointerEvents = 'auto';

        myDiceOne.classList.remove('diceShadow');
        myDiceTwo.classList.add('diceShadow');
      }
    }


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

    function hideDice(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');
      
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

