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
        const score = document.querySelector("#score-board");
        score.style.display = 'contents';
        btn.blur();
        game = new SSGame();
        game.init();
    }

    /**
     *  function to stop the game and game canvas
     *  */
    function stop() {
        console.log(" stop button clicked ");
        game.stopGame();
        btn.blur();
    }

};

/**
 * 1. music for full game
 * 2. splash screen for gam over
 * 3. animation for the front end  pages ( from michel)
 * 4. space bar and instructions for the pause and play game 
 * 
 */