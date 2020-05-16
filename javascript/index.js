var loadingScreen = document.querySelector('#loadingScreen');

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        loadingScreen.style.display = 'none';
    }
    }, 100);