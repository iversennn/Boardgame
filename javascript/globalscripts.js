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