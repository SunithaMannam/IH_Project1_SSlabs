/**
 *  Class that represents each slab (the moving blocks if the game)
 */
class Slab {
  /**
   *  Slab constructor
   */
  constructor() {
    this.xPosition = 0;
    this.yPosition = -25;
    this.width = 25;
    this.height = 25;
    this.movetimer = undefined;
    this.noOfSlabs = undefined;
    this.slabsAlign = undefined;
  }

  /**
   * creates a deep copy of the object
   * @param {*} slab
   */
  deepCopy(slab) {
    this.xPosition = slab.xPosition;
    this.yPosition = slab.yPosition;
    this.width = slab.width;
    this.height = slab.height;
    this.movetimer = slab.movetimer;
    this.game = slab.game;
    this.gameCtx = slab.gameCtx;
    this.canvasHeight = slab.canvasHeight;
    this.canvasWidth = slab.canvasWidth;
    this.color = slab.color;
    this.noOfSlabs = 0;
    this.slabsAlign = undefined;
  }

  /**
   *  Sets the game object to the Slab
   * @param {*} game
   */
  setGame(game, slabCnt) {
    this.game = game;
    this.gameCtx = game.gameCtx;
    this.canvasHeight = game.height;
    this.canvasWidth = game.width;
    // this.color = "red";
    if (slabCnt === 2) {
      this.slabsAlign = "H";
      this.noOfSlabs = 2;
    } else if (slabCnt === 3) {
      this.slabsAlign = "V";
      this.noOfSlabs = 2;
    } else {
      this.noOfSlabs = 1;
    }
  }

  /**
   * Draw the slab on the canvas i.e
   * the falling slab or the slab that reached bottom
   * @param {*} xPos
   */
  drawSlab(xPos, color) {
    this.xPosition = xPos || this.xPosition;
    this.color = color || this.color;
    // this.yPosition = 0;
    // this.gameCtx.fillStyle = "red";
    // let gradient = this.gameCtx.createLinearGradient(this.xPosition, this.yPosition, this.width, this.height);
    // gradient.addColorStop(0, "red");
    // gradient.addColorStop(0.5, "white");
    // gradient.addColorStop(0.9, "red");
    // this.gameCtx.fillStyle = gradient;
    const img = new Image();
    img.src = "images/redpattern_2.jpg";
    img.onload = () => {
      // let pattern = this.gameCtx.createPattern(img, "repeat");
      //   this.gameCtx.fillStyle = pattern;
      this.gameCtx.fillStyle = this.color; //"red";
      this.gameCtx.fillRect(
        this.xPosition,
        this.yPosition,
        this.width,
        this.height
      );
      this.gameCtx.strokeStyle = "#701007";
      this.gameCtx.lineWidth = 3;
      this.gameCtx.strokeRect(
        this.xPosition,
        this.yPosition,
        this.width,
        this.height
      );
      if (this.noOfSlabs === 2) {
        if (this.slabsAlign === "H") {
          // console.log(` inside drawSlab() --- x:  ${this.xPosition + this.width}   y: ${this.yPosition}  , ${ this.color}`);
          this.gameCtx.fillStyle = this.color; //"red";
          this.gameCtx.fillRect(
            this.xPosition + this.width,
            this.yPosition,
            this.width,
            this.height
          );
          this.gameCtx.strokeStyle = "#701007";
          this.gameCtx.lineWidth = 3;
          this.gameCtx.strokeRect(
            this.xPosition + this.width,
            this.yPosition,
            this.width,
            this.height
          );
        } else if (this.slabsAlign === "V") {
          // console.log(` inside drawSlab() --- x:  ${this.xPosition + this.width}   y: ${this.yPosition}  , ${ this.color}`);
          this.gameCtx.fillStyle = this.color; //"red";
          this.gameCtx.fillRect(
            this.xPosition,
            this.yPosition + this.height,
            this.width,
            this.height
          );
          this.gameCtx.strokeStyle = "#701007";
          this.gameCtx.lineWidth = 3;
          this.gameCtx.strokeRect(
            this.xPosition,
            this.yPosition + this.height,
            this.width,
            this.height
          );
        }
      }
    };
    // console.log( ` inside drawSlab() --- x:  ${this.xPosition}   y: ${this.yPosition}  , ${ this.color}` );
  }

  /**
   *  clears the slab from the canvas used to create moving effect
   */
  clearSlab() {
    if (this.game.isSlabFalling) {
      // console.log(" clearSlab()  : " + this.xPosition + "  " + this.yPosition);
      this.gameCtx.clearRect(
        this.xPosition - 2,
        this.yPosition - 2,
        this.width + 4,
        this.height + 4
      );
      if (this.slabsAlign === "H") {
        // console.log(" clearSlab()  : " + this.xPosition + this.width + "  " + this.yPosition);
        this.gameCtx.clearRect(
          this.xPosition + this.width - 2,
          this.yPosition - 2,
          this.width + 4,
          this.height + 4
        );
      }
      if (this.slabsAlign === "V") {
        // console.log(" clearSlab()  : " + this.xPosition + this.width + "  " + this.yPosition);
        this.gameCtx.clearRect(
          this.xPosition - 2,
          this.yPosition + this.height - 2,
          this.width + 4,
          this.height + 4
        );
      }
    }
  }

  /**
   *  to draw Slab on the canvas continuously.
   *  Timer is  started that repeats the drawing task
   *  This also checks the collision of alsb with bottom of canvas or with any other slabs
   * @param {*} xPos
   */
  draw(xPos, color) {
    this.game.isSlabFalling = true;
    this.xPosition = xPos;
    this.color = color || this.color;

    this.movetimer = setInterval(() => {
      if (this.game.playing) {
        if (this.game.isSlabFalling) {
          this.drawSlab(this.xPosition, this.color);
          this.clearSlab();
        }
        if (this.checkLineCollision()) {
          this.game.isCanvasTouched = false;
          this.stopSlab();
        } else if (this.checkCanvasCollision()) {
          this.game.isCanvasTouched = true;
          this.stopSlab();
        } else {
          this.yPosition += 25;
        }
      }
    }, 1000 / 10); // 15
  }

  /**
   *  stops the timer that trigger the salb falling
   *  used to stop the slab drawing task, once the salb reaches the bottom of screen
   */
  stopSlab() {
    clearInterval(this.movetimer);
    if (typeof this.game != "undefined") {
      this.game.addSlabToLines(this);
    }
    // console.log("stopSlab(),  slab collided  ");
  }

  /**
   * cheks whether the slab collided with bottom of screen
   */
  checkCanvasCollision() {
    if (
      this.canvasHeight - this.yPosition <= this.height ||
      (this.slabsAlign == "V" &&
        this.canvasHeight - (this.yPosition + this.height) <= this.height)
    ) {
      // console.log(" slab collided with canvas");
      this.game.isSlabFalling = false;
      return true;
    }
    return false;
  }

  /**
   * chesks whether the slab reaches the bottom, but touches any other slabs
   */
  checkLineCollision() {
    if (this.game.isLineCollision(this)) {
      this.game.isSlabFalling = false;
      return true;
    } else {
      return false;
    }
  }

  /**
   *  Plays the audio for right, left, down button pressing
   */
  playSlabMove() {
    var audioElement = new Audio("sound/slab-move.mp3");
    audioElement.volume = 0.05;
    audioElement.play();
  }

  /**
   * For slab moving roght or left
   */
  moveSlab() {
    document.onkeydown = (event) => {
      const key = event.keyCode;

      // check for 'space bar' to pause the game
      if (key === 32) {
        this.game.playing = !this.game.playing;
      }

      /*  37 : arrow left ;  39 : arrow right ;   */
      const possibleKeyStrokes = [37, 39, 40];
      if (
        possibleKeyStrokes.includes(key) &&
        this.game.isSlabFalling &&
        this.game.playing
      ) {
        this.clearSlab();
        switch (key) {
          case 37: // arrow left
            // console.log(`is slab colliding to left slab ${!this.game.isLeftSideCollision(this)} , slabx: ${this.xPosition} , slaxY: ${this.yPosition}`);
            if (
              this.xPosition >= this.width &&
              !this.game.isLeftSideCollision(this)
            ) {
              this.xPosition -= this.width;
              this.playSlabMove();
            }
            break;

          case 39: // arrow right
            if (this.slabsAlign === "V") {
              if (
                this.canvasWidth - this.xPosition > this.width &&
                !this.game.isRightSideCollision(this)
              ) {
                this.xPosition += this.width;
                this.playSlabMove();
              }
            } else {
              if (
                this.canvasWidth - this.xPosition >
                  this.width * this.noOfSlabs &&
                !this.game.isRightSideCollision(this)
              ) {
                this.xPosition += this.width;
                this.playSlabMove();
              }
            }
            break;

          case 40: // move bottom
            if (this.slabsAlign === "V") {
              if (
                this.yPosition + this.height * this.noOfSlabs <
                  this.canvasHeight &&
                !this.game.isBottomSideCollision(this)
              ) {
                // console.log(" move bottom for V " + this.yPosition);
                this.yPosition += this.height;
                this.playSlabMove();
              }
            } else {
              if (
                this.yPosition + this.height < this.canvasHeight &&
                !this.game.isBottomSideCollision(this)
              ) {
                // console.log(" move bottom for normal " + this.yPosition);
                this.yPosition += this.height;
                this.playSlabMove();
              }
            }
            break;
        }
        // console.log(" moveslab() -- " + event.keyCode);
        this.drawSlab(this.xPosition);
      }
    };
  }
}
