/*var myAssets = document.querySelector('#loadAssets');
console.log(myAssets);

var checkState = document.querySelector('.checkState');
console.log(checkState.onload);

myAssets.onload = function() {
    console.log('all is loaded');
    console.log(checkState.onload);
    }

    console.log(document.readyState);

if (document.readyState === 'complete') {
    console.log('all is loaded');
    };*/

var loadingScreen = document.querySelector('#loadingScreen');

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        loadingScreen.style.display = 'none';
    }
    }, 100);