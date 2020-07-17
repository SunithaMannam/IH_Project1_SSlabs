# Project | Sliding Slabs

# Description:

It is a block matching game (influenced by Tetris game), where small square slabs fall from the top and player has to build the slabs into a horizontal line, once the slabs reach the bottom. Player can move the slabs to right or left to change the position of the slabs in order to build a horizontal line (filled with slabs). The horizontal line will be cleared once it is filled with slabs. Player gets score for each horizontal line. The game ends when the slabs pile up to the top of the screen. Player can even abruptly end the game using the ‘Stop Game’

# MVP (DOM – CANVAS):

<ul> 
 <li>	The game has an empty screen.</li>
 <li>Small square slabs keep falling from the top.</li>
 <li>Slabs can be moved to right or left. </li>
 <li>Build as many horizontal lines as possible and try to keep the screen empty as possible, without piling up the slabs.</li>
</ul>

# Backlog:

<ul>
 <li> User can choose the speed of the falling slabs </li>
 <li> Different styles of falling squares. (two squares in a row, two squares in a column, cube of 4 squares … )
 </li>
</ul>

# Data Structures

<h4> Index.html </h4>
<pre> Html page to display the ‘Game Title’, ‘Start/Stop button” and the game screen </pre>

<h4> Script.js	</h4> 
<pre><ul><li> startGame() </li><li>creates SSGameScreen Object and starts the screen	</li><li> event listeners for ‘Start’ and ‘Stop’ buttons </li><li> stopGame() {}</li></ul></pre>
<h4>SSGameScreen.js</h4><pre><ul><li>constructor() {Canvas-context;Canvas-element;Canvas-width;Canvas-height;Object of SSGame} </li><li>initScreen() {} </li><li>startScreen() </li><li>setInterval_1() { // draws and moves the falling slabs} </li><li>setinterval_2(){//draws the incomplete horizontal lines; checks for collisions } </li></ul></pre>
<h4>SSGame.js</h4><pre><ul><li>constructor() {Array of Objects SSHorizontalLine;Object of SimpleSlab} </li><li>initGame() </li><li>startGame() {} </li><li>clearFilledLines(){//checks the array to look fully built lines and deletes the fully built lines} </li></ul></pre>
<h4>SSHorizontalLine.js</h4><pre><ul><li>constructor() {	number of squares;	array of SimpleSlab objects;top-y-point;bottom-y-point} </li><li>isLineFilled() {// checks whether the horizontal line if fully built or not} </li><li>drawHorizontalLine(){ // draws the horizontal line} </li><li>clearsHorizontalLine() {//  clears the horizonatal line} </li></ul></pre>
<h4>SimpleSlab.js</h4><pre><ul><li>constructor() {x-position;y-position;width;height;} </li><li>drawFallingSlab() {}</li><li>drawSlab(){} </li><li>clearSlab() {}</li><li>moveSlab(){}</li><li>checkColisionBottom(){// checks collision with canvas bottom}</li><li>checkLineCollision(array of horizontal lines){ //checks collision with any of the lines }</li></ul></pre>

# States and States Transitions

<pre><li>Start Screen</li><li>Game screen</li><li>Game Over Screen</li></pre>

# Tasks

<ul><li>Script - startGame()</li><li>Script - stopGame()</li><li>SSGameScreen - initScreen()</li><li>SSGameScreen - startScreen()</li><li>SSGameScreen - timer_1()</li><li>SSGameScreen - timer_2()</li><li>SSGame - constructor()</li><li>SSGame - initGame()</li><li>SSGame - startGame()</li><li>SSHorizontalLine - constructor()</li> <li>SSHorizontalLine - isLineFilled()</li><li>SSHorizontalLine - drawHorizontalLine()</li><li>SSHorizontalLine - clearsHorizontalLine()</li><li>SimpleSlab - constructor()</li> 
<li>SimpleSlab - drawFallingSlab()</li><li>SimpleSlab - drawSlab()</li><li>SimpleSlab - clearSlab()</li><li>SimpleSlab - moveSlab()</li><li>SimpleSlab - checkColisionBottom()</li><li>SimpleSlab - checkLineCollision()</li></ul>

# Links

 <h4>Trello</h4> <a href="https://trello.com/b/ovt53z5I" alt="">https://trello.com/b/ovt53z5I</a>
 <h4>Git</h4> <p>URls for the project repo and deploy
<a href="https://github.com/SunithaMannam/IH_Project1_SSlabs">Link Repo</a>
<a href="https://sunithamannam.github.io/IH_Project1_SSlabs/" >Link Deploy</a></p>
