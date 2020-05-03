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

      function drawPlayerOne(){
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[0]-90,y[0]-100,150,150);
        };
      }
      drawPlayerOne();

      function movePlayerOne(){
        playerOnePlacement = Number(localStorage.p1);

        ctx.clearRect(0,0,boardCanvas.width,boardCanvas.height);
        ctx.clearRect(x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);

        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,x[0+1+playerOnePlacement]-90,y[0+1+playerOnePlacement]-100,150,150);

        console.log("Player one tile " + localStorage.p1+"+1");

        };
      };

      function drawPlayerTwo(){
        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[1]-90,y[1]-100,150,150);
        };
      }
      drawPlayerTwo();

      function movePlayerTwo(){
        playerTwoPlacement = Number(localStorage.p2);

        //ctx.clearRect(x[0+playerTwoPlacement]-90,y[0+playerTwoPlacement]-100,150,150);

        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,x[0+playerTwoPlacement]-90,y[0+playerTwoPlacement]-100,150,150);

        console.log("Player two tile " + localStorage.p2);

        };
      };
      
      function diceRollOne(){
        var myDice = document.querySelector("#diceOne");
        sides = 6;
        random = Math.floor(Math.random() * this.sides) + 1;
        myDice.innerHTML = '<h1>' + random;

        localStorage.p1 = Number(localStorage.p1)+random;

        movePlayerOne(random);
      }

      function diceRollTwo(){
        var myDice = document.querySelector("#diceTwo");
        sides = 6;
        random = Math.floor(Math.random() * this.sides) + 1;
        myDice.innerHTML = '<h1>' + random;

        localStorage.p2 = Number(localStorage.p2)+random;

        movePlayerTwo(random);
      }

      
      var diceOne = document.querySelector("#diceOne");
      diceOne.addEventListener('click', function(){
        diceRollOne();
      });

      var diceTwo = document.querySelector("#diceTwo");
      diceTwo.addEventListener('click', function(){
        diceRollTwo();
      });

    })
  });

