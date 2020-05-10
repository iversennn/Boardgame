// Cursor coordinate functions
/*var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;
function getXYPosition(e){
myMouseX=(e||event).clientX-235;
myMouseY=(e||event).clientY-70;
if (document.documentElement.scrollTop > 0) {
myMouseY = myMouseY + document.documentElement.scrollTop;
}
if (xyOn) {
console.log("X is " + myMouseX + "\nY is " + myMouseY);
}
}
function toggleXY() {
xyOn = !xyOn;
document.getElementById('xyLink').blur();
return false;
}
document.onmouseup=getXYPosition;*/

var helpConatinerButton = document.querySelector("#helpBtn");
helpConatinerButton.addEventListener('click', function(){
    var helpContainer = document.querySelector('#helpContainer');
    if (helpContainer.style.display == 'none'){
        helpContainer.style.display = 'block';
    } else {
        helpContainer.style.display = 'none';
    }
});

/*---------- Text inside help menu ------------------------------------------------------*/
var helpText = document.querySelector('#helpText');
var textOne = document.createElement('p');
var textTwo = document.createElement('p');
var textThree = document.createElement('p');
var textFour = document.createElement('p');
var textFive = document.createElement('p');
var textSix = document.createElement('p');

textOne.innerHTML = 'The rules are simple! The first oponent to reach the castle wins!'
textTwo.innerHTML = 'On your journey you may encounter traps who will set you back some tiles or you could be lucky and land on a tile that sends you forward!'
textThree.innerHTML ='One of the tiles hides a mighty dragon, try not to land on this one!'
textFour.innerHTML ='If you are extra lucky and roll a six on the dice you get another turn!'
textFive.innerHTML ='Player 1 starts the turn, and both players start on tile 1!'
textSix.innerHTML ='On the right side of the screen you find all the buttons, to roll a dice simply just press it!'

helpText.appendChild(textOne);
helpText.appendChild(textTwo);
helpText.appendChild(textThree);
helpText.appendChild(textFour);
helpText.appendChild(textFive);
helpText.appendChild(textSix);