var boardCanvas = document.getElementById("canvas");
var timer = 0;

boardCanvas.width = 1450;
boardCanvas.height = 800;

var ctx = boardCanvas.getContext("2d");

var xcoordinateTileOne = 327;
var ycoordinateTileOne = 194;

var xcoordinateTileThree = 619;
var ycoordinateTileThree = 161;

var xcoordinateTileFive = 683;
var ycoordinateTileFive = 283;

var characterOneImage = new Image();
characterOneImage.src = './media/character/character-01.svg'
characterOneImage.onload = function() {
  ctx.drawImage(characterOneImage, xcoordinateTileThree-90,ycoordinateTileThree-100,150,150);
}

var characterTwoImage = new Image();
characterTwoImage.src = './media/character/character-05.svg'
characterTwoImage.onload = function() {
  ctx.drawImage(characterTwoImage, xcoordinateTileFive-60,ycoordinateTileFive-100,150,150);
}

/* Tile 1 Player 1 */
ctx.beginPath();
ctx.arc(260, 202, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 1 Player 2 */
ctx.beginPath();
ctx.arc(330, 202, 30, 0, 2 * Math.PI);
ctx.stroke();


/* Tile 2 */
ctx.beginPath();
ctx.arc(523, 172, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 3 */
ctx.beginPath();
ctx.arc(619, 161, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 4 */
ctx.beginPath();
ctx.arc(708, 208, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 5 */
ctx.beginPath();
ctx.arc(683, 283, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 6 */
ctx.beginPath();
ctx.arc(560, 326, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 7 */
ctx.beginPath();
ctx.arc(422, 381, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 8 */
ctx.beginPath();
ctx.arc(475, 458, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 9 */
ctx.beginPath();
ctx.arc(600, 468, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 10 */
ctx.beginPath();
ctx.arc(722, 441, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 11 */
ctx.beginPath();
ctx.arc(832, 464, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 12 */
ctx.beginPath();
ctx.arc(952, 424, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 13 */
ctx.beginPath();
ctx.arc(1039, 351, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 14 */
ctx.beginPath();
ctx.arc(1010, 261, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 15 */
ctx.beginPath();
ctx.arc(990, 171, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 16 */
ctx.beginPath();
ctx.arc(1112, 139, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 17 */
ctx.beginPath();
ctx.arc(1224, 189, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 18 */
ctx.beginPath();
ctx.arc(1247, 264, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 19 */
ctx.beginPath();
ctx.arc(1244, 346, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 20 */
ctx.beginPath();
ctx.arc(1222, 436, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 21 */
ctx.beginPath();
ctx.arc(1206, 513, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 22 */
ctx.beginPath();
ctx.arc(1184, 593, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 23 */
ctx.beginPath();
ctx.arc(1104, 648, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 24 */
ctx.beginPath();
ctx.arc(1001, 606, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 25 */
ctx.beginPath();
ctx.arc(909, 561, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 26 */
ctx.beginPath();
ctx.arc(802, 598, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 27 */
ctx.beginPath();
ctx.arc(697, 643, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 28 */
ctx.beginPath();
ctx.arc(582, 646, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 29 */
ctx.beginPath();
ctx.arc(466, 633, 30, 0, 2 * Math.PI);
ctx.stroke();

/* Tile 30 */
ctx.beginPath();
ctx.arc(236, 609, 30, 0, 2 * Math.PI);
ctx.stroke();
