//***DOM SELECTORS***/
const playerOneInput = document.getElementById("playerOneName");
const playerTwoInput = document.getElementById("playerTwoName");
const playersButton = document.getElementById("players");
const startButton = document.getElementById("gameStart");
const board = document.getElementById("board");

let playerOneName;
let playerTwoName;
let currentPlayer;

const gameBoard = ["", "", "", "", "", "", "", "", ""];

//render board

//player name submission
function submitPlayers(event) {
  event.preventDefault();
  playerOneName = playerOneInput.value;
  playerTwoName = playerTwoInput.value;
  document.getElementById("playerNames").textContent =
    playerOneName + " vs " + playerTwoName;
}

// ****CHECK WIN****
function checkWin() {
  const winningBoards = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}

// // listeners
playersButton.addEventListener("click", submitPlayers);
startButton.addEventListener("click", gameStart);
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...
  console.log("board clicked");
  renderState(); // show the user the new state
}
