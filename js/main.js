window.onload = function () {

    /**
     *  action when 'Start Game' is clicked 
     * */
    const btn = document.querySelector(".btn-game");
    let game = undefined;
    btn.onclick = function () {
        if (btn.classList.contains("start")) {
            start();
        } else {
            stop();
        }
    }

    /**
     *  function to start the game and game canvas
     *  */
    function start() {

        btn.classList.remove('start');
        btn.classList.add('stop');
        btn.innerText = 'STOP GAME';
        const screen = document.querySelector("#ss-canvas");
        screen.style.display = 'inline';
        game = new SSGame();
        game.init();
    }

    /**
     *  function to stop the game and game canvas
     *  */
    function stop() {
        console.log(" stop button clicked ");
        game.stopGame();
    }

};

/**
 * 
 *  1. screen  flickering
    2.   
    3.  background image for the body 
 */