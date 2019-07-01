const board = [];
const topLeft = board[0];
const topMiddle = board[1];
const topRight = board[2];
const midLeft = board[3];
const midMiddle = board[4];
const midRight = board[5];
const botLeft = board[6];
const botMiddle = board[7];
const botRight = board[8];
let boardFull = true;

function play(clickedId) {
  let player = document.getElementById("player");
  let clickedEle = document.getElementById(clickedId);

  if (player === "X" && board[clickedId] === undefined) {
    play.innerText = "O";
    clickedEle.innerText = "X";
    board[clickedId] = "X";
  } else if (player === "O" && board[clickedId] === undefined) {
    player.innerText = "X";
    clickedEle.innerText = "O";
    board[clickedId] = "O";
  } else alert("You cannot click here!")
}

if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
  alert(`${topLeft} is the winner!`);
  blackDiamond();
}
if (midLeft !== undefined && midLeft === midMiddle && midLeft === midRight) {
  alert(`${midLeft} is the winner!`);
  blackDiamond();
}
if (botLeft !== undefined && botLeft === botMiddle && botLeft === botRight) {
  alert(`${botLeft} is the winner!`);
  blackDiamond();
}
if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
  alert(`${topLeft} is the winner!`);
  blackDiamond();
}
if (
  topMiddle !== undefined &&
  topMiddle === midMiddle &&
  topMiddle === botMiddle
) {
  alert(`${topMiddle} is the winner!`);
  blackDiamond();
}
if (topRight !== undefined && topRight === midRight && topRight === botRight) {
  alert(`${topRight} is the winner!`);
  blackDiamond();
}
if (topLeft !== undefined && topLeft === midMiddle && topLeft === botRight) {
  alert(`${topLeft} is the winner!`);
  blackDiamond();
}
if (botLeft !== undefined && botLeft === midMiddle && botLeft === topRight) {
  alert(`${botLeft} is the winner!`);
  blackDiamond();
}

for (let i = 0; i <= 8; i++) {
  board[i] === undefined ? (boardFull = false) : null;
}
if (boardFull === true) {
  alert("Cat's game!");
  blackDiamond();
}

function blackDiamond() {
  for (let key in board) {
    board[key] = undefined;
  }
}
