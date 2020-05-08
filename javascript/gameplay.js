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
    localStorage.setItem('p1Old','0');
    localStorage.setItem('p2','0');
    localStorage.setItem('p2Old','0');
    localStorage.setItem('diceRollOne','0');
    localStorage.setItem('diceRollTwo','0');

    playerOneP = document.querySelector('#playerOne');
    playerOneP.innerHTML = localStorage.playerOneName;

    playerTwoP = document.querySelector('#playerTwo');
    playerTwoP.innerHTML = localStorage.playerTwoName;

    diceSoundForGamePlay();

    var gameplayInfoText = document.querySelector('#gameplayInfoText');

//------------------------------------------------ Test Area ---------------------------------------------------------

/*let n = 40;
let frame = 0;
let startX = 0;
let startY = 0;
let endX = 900;
let endY = 350;
let incrementX = (endX - startX) / n;
let incrementY = (endY - startY) / n;

function animateObject() {
    if (frame < n) {
    startX += incrementX;
    startY += incrementY;

    var characterOneImage = new Image();
    characterOneImage.src = '../boardgame/media/character/character-01.svg';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(characterOneImage, startX, startY, 50, 50);

    frame++;

    window.requestAnimationFrame(animateObject);
    }
}

//window.requestAnimationFrame(animateObject);

var testImage = new Image();
testImage.src = '../boardgame/media/character/character-01.svg';

setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    startX += incrementX;
    startY += incrementY;

    if (frame < n) {
    ctx.drawImage(testImage,startX,startY,150,150);
    frame++;
    } else {
    startX = 0;
    startY = 0;
    frame = 0;
    }
}, 20);*/

//------------------------------------------------ Draw Players ------------------------------------------------------

    function drawPlayerOne(){
      var characterOneImage = new Image();
      characterOneImage.src = localStorage.p1Picture;
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0]-90,y[0]-100,150,150);
      };
    };
    drawPlayerOne();

    function drawPlayerTwo(){
      var characterTwoImage = new Image();
      characterTwoImage.src = localStorage.p2Picture;
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[1]-60,y[1]-100,150,150);
      };
    };
    drawPlayerTwo();

    function showPlayerOne(){
      var characterOneImage = new Image();
      characterOneImage.src = localStorage.p1Picture;
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[1+Number(localStorage.p1)]-90,y[1+Number(localStorage.p1)]-100,150,150);
      };
    };

    function showPlayerTwo(){
      var characterTwoImage = new Image();
      characterTwoImage.src = localStorage.p2Picture;
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[1+Number(localStorage.p2)]-60,y[1+Number(localStorage.p2)]-100,150,150);
      };
    };

//------------------------------------------------ Animate Movement --------------------------------------------------
function p1AnimatedMovement(){
  var playerOnePlacement = Number(localStorage.p1);
  var playerOneOldPlacement = Number(localStorage.p1Old);
  let n = 40;
  let frame = 0;
  let startX = x[playerOneOldPlacement]-90;
  let startY = y[playerOneOldPlacement]-100;
  let endX = x[0+1+playerOnePlacement]-90;
  let endY = y[0+1+playerOnePlacement]-100;
  let incrementX = (endX - startX) / n;
  let incrementY = (endY - startY) / n;

  function animateObject() {
      if (frame < n) {
      startX += incrementX;
      startY += incrementY;

      var characterOneImage = new Image();
      characterOneImage.src = localStorage.p1Picture;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(characterOneImage, startX, startY, 150, 150);

      frame++;

      

      window.requestAnimationFrame(animateObject);
      }
      showPlayerTwo();
  }
  window.requestAnimationFrame(animateObject);
}

function p2AnimatedMovement(){
  var playerTwoPlacement = Number(localStorage.p2);
  var playerTwoOldPlacement = Number(localStorage.p2Old);
  let n = 40;
  let frame = 0;
  let startX = x[playerTwoOldPlacement]-60;
  let startY = y[playerTwoOldPlacement]-100;
  let endX = x[0+1+playerTwoPlacement]-60;
  let endY = y[0+1+playerTwoPlacement]-100;
  let incrementX = (endX - startX) / n;
  let incrementY = (endY - startY) / n;

  function animateObject() {
      if (frame < n) {
      startX += incrementX;
      startY += incrementY;

      var characterTwoImage = new Image();
      characterTwoImage.src = localStorage.p2Picture;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(characterTwoImage, startX, startY, 150, 150);

      frame++;

      window.requestAnimationFrame(animateObject);
      }
      showPlayerOne();
  }
  window.requestAnimationFrame(animateObject);
}

//------------------------------------------------ Move Players ------------------------------------------------------

    function movePlayerOne(){
      var playerOnePlacement = Number(localStorage.p1);

      ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
      p1AnimatedMovement();

      var characterOneImage = new Image();
      characterOneImage.src = localStorage.p1Picture;
      characterOneImage.onload = function() {
      ctx.drawImage(characterOneImage,x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);
      
      ifPlayerOneWin();
      p1TrapTile6();
      p1LuckyTile12();
      p1LuckyTile16();
      p1TrapTile25();
      p1TrapTile28();
      playerOneAnotherTurn();
      };
    };

    function movePlayerTwo(){
      var playerTwoPlacement = Number(localStorage.p2);

      ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
      p2AnimatedMovement()

      var characterTwoImage = new Image();
      characterTwoImage.src = localStorage.p2Picture;
      characterTwoImage.onload = function() {
      ctx.drawImage(characterTwoImage,x[0+1+playerTwoPlacement]-60,y[0+1+playerTwoPlacement]-100,150,150);
      
      ifPlayerTwoWin();
      p2TrapTile6();
      p2LuckyTile12();
      p2LuckyTile16();
      p2TrapTile25();
      p2TrapTile28();
      playerTwoAnotherTurn();
      };
    };
    

//------------------------------------------------ Dice Roll ------------------------------------------------------

    function diceRollOne(){
      
      var myDice = document.querySelector("#diceOne");
      var myDiceTwo = document.querySelector("#diceTwo");

        sides = 6;
        random = Math.floor(Math.random() * this.sides) + 1;

      function showRollOne(){
        myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + random;
        localStorage.setItem('diceRollOne',random);

        localStorage.p1Old = Number(localStorage.p1)+1;
        localStorage.p1 = Number(localStorage.p1)+random;
        myDice.style.pointerEvents = 'auto';

        myDiceTwo.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + 'Roll!';

        movePlayerOne(random);
        hideDice();
      };

      function zero() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '3';
            showRollOne();
        }, 300)
      }

      function one() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '2';
            zero();
        }, 300)
      }

      function two() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '5';
            one();
        }, 300)
      }

      function three() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '4';
            two();
        }, 300)
      }

      function four() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '6';
            three();
        }, 300)
      }

      function five() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '3';
            four();
        }, 300)
      }

      function six() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '1';
            five();
        }, 300)
      }

      function seven() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '4';
            six();
        }, 300)
      }

      function eight() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + '6';
            seven();
        }, 300)
      }

        eight();
        myDice.style.pointerEvents = 'none';
      };

    function diceRollTwo(){
      var myDice = document.querySelector("#diceTwo");
      var myDiceOne = document.querySelector("#diceOne");
      sides = 6;
      random = Math.floor(Math.random() * this.sides) + 1;
      
      function showRollTwo(){
        myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + random;
        localStorage.setItem('diceRollTwo',random);

        localStorage.p2Old = Number(localStorage.p2)+1;
        localStorage.p2 = Number(localStorage.p2)+random;
        myDice.style.pointerEvents = 'auto';

        myDiceOne.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + 'Roll!';

        movePlayerTwo(random);
        hideDice();
      }

      function one() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '2';
            showRollTwo();
        }, 300)
      }

      function two() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '5';
            one();
        }, 300)
      }

      function three() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '4';
            two();
        }, 300)
      }

      function four() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '6';
            three();
        }, 300)
      }

      function five() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '3';
            four();
        }, 300)
      }

      function six() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '5';
            five();
        }, 300)
      }

      function seven() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '1';
            six();
        }, 300)
      }

      function eight() {
        setTimeout(function () {
            myDice.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + '4';
            seven();
        }, 300)
      }

        eight();
        myDice.style.pointerEvents = 'none';
    }

    
    var diceOne = document.querySelector("#diceOne");
      diceOne.addEventListener('click', function(){
      diceRollOne();
      gameplayInfoText.innerHTML = '';
    });

    var diceTwo = document.querySelector("#diceTwo");
      diceTwo.addEventListener('click', function(){
      diceRollTwo();
      gameplayInfoText.innerHTML = '';
    });

//------------------------------------------------ If dice Roll = 6 ------------------------------------------------------

    function playerOneAnotherTurn(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');

      if (localStorage.diceRollOne == 6){
        gameplayInfoText.innerHTML = 'Player one rolled a 6 and gets another turn!'
        myDiceOne.style.pointerEvents = 'auto';
        myDiceTwo.style.pointerEvents = 'none';
        
        myDiceOne.classList.add('diceShadow');
        myDiceTwo.classList.remove('diceShadow');

        myDiceOne.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + 'Roll!';
        myDiceTwo.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + localStorage.diceRollTwo;
        kidsCheering();
      }
    }

    function playerTwoAnotherTurn(){
      var myDiceOne = document.querySelector('#diceOne');
      var myDiceTwo = document.querySelector('#diceTwo');

      if (localStorage.diceRollTwo == 6){
        gameplayInfoText.innerHTML = 'Player two rolled a 6 and gets another turn!'
        myDiceOne.style.pointerEvents = 'none';
        myDiceTwo.style.pointerEvents = 'auto';

        myDiceOne.classList.remove('diceShadow');
        myDiceTwo.classList.add('diceShadow');

        myDiceOne.innerHTML = '<p>' + localStorage.playerOneName + '<h1>' + localStorage.diceRollOne;
        myDiceTwo.innerHTML = '<p>' + localStorage.playerTwoName + '<h1>' + 'Roll!';
        kidsCheering();
      }
    }


//------------------------------------------------ Traps/Lucky ---------------------------------------------------------

    function p1TrapTile6(){
      if (localStorage.p1 == 5){
        gameplayInfoText.innerHTML = "Oh no! you hit tile 6 :( move back to tile 2!"
        localStorage.p1 = 1;
        p1AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerTwo();
        var characterOneImage = new Image();
        characterOneImage.src = localStorage.p1Picture;
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[2]-90,y[2]-100,150,150);
        evilLaugh();
        };
      };
    };

    function p2TrapTile6(){
      if (localStorage.p2 == 5){
        gameplayInfoText.innerHTML = "Oh no! you hit tile 6 :( move back to tile 2!"
        localStorage.p2 = 1;
        p2AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerOne();
        var characterTwoImage = new Image();
        characterTwoImage.src = localStorage.p2Picture;
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[2]-60,y[2]-100,150,150);
        evilLaugh();
        };
      };
    };

    function p1TrapTile25(){
      if (localStorage.p1 == 24){
        gameplayInfoText.innerHTML = "Oh no! you hit tile 25 :( move back to tile 21!"
        localStorage.p1 = 20;
        p1AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerTwo();
        var characterOneImage = new Image();
        characterOneImage.src = localStorage.p1Picture;
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[21]-90,y[21]-100,150,150);
        evilLaugh();
        };
      };
    };

    function p2TrapTile25(){
      if (localStorage.p2 == 24){
        gameplayInfoText.innerHTML = "Oh no! you hit tile 25 :( move back to tile 21!"
        localStorage.p2 = 20;
        p2AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerOne();
        var characterTwoImage = new Image();
        characterTwoImage.src = localStorage.p2Picture;
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[21]-60,y[21]-100,150,150);
        evilLaugh();
        };
      };
    };

    function p1LuckyTile12(){
      if (localStorage.p1 == 11){
        gameplayInfoText.innerHTML = "Yeii, you hit tile 12! Move to tile 15!"
        localStorage.p1 = 14;
        p1AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerTwo();
        var characterOneImage = new Image();
        characterOneImage.src = localStorage.p1Picture;
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[15]-90,y[15]-100,150,150);
        kidsCheering();
        };
      };
    };

    function p2LuckyTile12(){
      if (localStorage.p2 == 11){
        gameplayInfoText.innerHTML = "Yeii, you hit tile 12! Move to tile 15!"
        localStorage.p2 = 14;
        p2AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerOne();
        var characterTwoImage = new Image();
        characterTwoImage.src = localStorage.p2Picture;
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[15]-60,y[15]-100,150,150);
        kidsCheering();
        };
      };
    };

    function p1LuckyTile16(){
      if (localStorage.p1 == 15){
        gameplayInfoText.innerHTML = "Yeii, you hit tile 16! Move to tile 20!"
        localStorage.p1 = 19;
        p1AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerTwo();
        var characterOneImage = new Image();
        characterOneImage.src = localStorage.p1Picture;
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[20]-90,y[20]-100,150,150);
        kidsCheering();
        };
      };
    };

    function p2LuckyTile16(){
      if (localStorage.p2 == 15){
        gameplayInfoText.innerHTML = "Yeii, you hit tile 16! Move to tile 20!"
        localStorage.p2 = 19;
        p2AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerOne();
        var characterTwoImage = new Image();
        characterTwoImage.src = localStorage.p2Picture;
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[20]-60,y[20]-100,150,150);
        kidsCheering();
        };
      };
    };

    function p1TrapTile28(){
      if (localStorage.p1 == 27){
        gameplayInfoText.innerHTML = "Oh no! You met a dragon and fled! Move to tile 22!"
        localStorage.p1 = 21;
        p1AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerTwo();
        var characterOneImage = new Image();
        characterOneImage.src = localStorage.p1Picture;
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[22]-90,y[22]-100,150,150);
        dragonRoar();
        };
      };
    };

    function p2TrapTile28(){
      if (localStorage.p2 == 27){
        gameplayInfoText.innerHTML = "Oh no! You met a dragon and fled! Move to tile 22!"
        localStorage.p2 = 21;
        p2AnimatedMovement();

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        showPlayerOne();
        var characterTwoImage = new Image();
        characterTwoImage.src = localStorage.p2Picture;
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[22]-60,y[22]-100,150,150);
        dragonRoar();
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
        window.location = './winner.html';
        gameplayInfoText.innerHTML = playerOneName + "arrived safely to the castle!";
      }
    }

    function ifPlayerTwoWin(){
      if (localStorage.p2 > 28){
        window.location = './winner.html';
        gameplayInfoText.innerHTML = playerTwoName + "arrived safely to the castle!";
      }
    }

  })
});

//------------------------------------------------ Warning ---------------------------------------------------------
/*window.addEventListener('beforeunload', (event) => {
  if (localStorage.p1 < 28 && localStorage.p2 < 28){
    event.returnValue = `If you leave the page gamedata will be lost!`;
  } else {
    return;
  }   
});*/

/*window.addEventListener('beforeunload', (event) => {
  if (localStorage.p1 < 28){
    event.returnValue = `If you leave the page gamedata will be lost!`;
  } else {
    return;
  }   
});*/

/*window.addEventListener('beforeunload', (event) => {
  let testVariable = localStorage.p1 < 28 && localStorage.p2 < 28;
  if (testVariable === true){
    event.returnValue = `If you leave the page gamedata will be lost!`;
  } else {
    return;
  }   
});*/