fetch("./json/gameplay.json")
  .then(response => {
    response.json().then(jsonResult => {
      var boardCanvas = document.getElementById("canvas");
      boardCanvas.width = 1450;
      boardCanvas.height = 800;
      var ctx = boardCanvas.getContext("2d");
      console.log(jsonResult);

      function drawPlayer(){
        var characterOneImage = new Image();
        characterOneImage.src = jsonResult.characters.player1.url[0];
        characterOneImage.onload = function() {
        ctx.drawImage(characterOneImage,jsonResult.coordinates.tile1player1.x-90,
                                        jsonResult.coordinates.tile1player1.y-100,150,150);
        };

        var characterTwoImage = new Image();
        characterTwoImage.src = jsonResult.characters.player2.url[0];
        characterTwoImage.onload = function() {
        ctx.drawImage(characterTwoImage,jsonResult.coordinates.tile1player2.x-90,
                                        jsonResult.coordinates.tile1player2.y-100,150,150);
        };
      }
      drawPlayer();
    })
  });

function diceRoll(){
  sides = 6;
  random = Math.floor(Math.random() * this.sides) + 1;
  console.log(random);
}
diceRoll();
