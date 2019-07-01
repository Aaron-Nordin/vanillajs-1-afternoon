let board = [];

function play(clickedId) {
  // console.log(clickedId)
  let player = document.getElementById("player");
  let clickedEle = document.getElementById(clickedId);
  //   console.log(clickedEle)
  //   console.log(board[clickedId])
  //   console.log(player)
  if (player.innerText === "X" && !board[clickedId]) {
    player.innerText = "O";
    clickedEle.innerText = "X";
    board[clickedId] = "X";
    // console.log(board[clickedId])
  } else if (player.innerText === "O" && !board[clickedId]) {
    player.innerText = "X";
    clickedEle.innerText = "O";
    board[clickedId] = "O";
    // console.log(board[clickedId])
  } else alert("You cannot click here!");

  let topLeft = board[0];
  let topMiddle = board[1];
  let topRight = board[2];
  let midLeft = board[3];
  let midMiddle = board[4];
  let midRight = board[5];
  let botLeft = board[6];
  let botMiddle = board[7];
  let botRight = board[8];

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert(`${topLeft} is the winner!`);
    reset();
  }
  if (midLeft !== undefined && midLeft === midMiddle && midLeft === midRight) {
    alert(`${midLeft} is the winner!`);
    reset();
  }
  if (botLeft !== undefined && botLeft === botMiddle && botLeft === botRight) {
    alert(`${botLeft} is the winner!`);
    reset();
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner!`);
    reset();
  }
  if (
    topMiddle !== undefined &&
    topMiddle === midMiddle &&
    topMiddle === botMiddle
  ) {
    alert(`${topMiddle} is the winner!`);
    reset();
  }
  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === botRight
  ) {
    alert(`${topRight} is the winner!`);
    reset();
  }
  if (topLeft !== undefined && topLeft === midMiddle && topLeft === botRight) {
    alert(`${topLeft} is the winner!`);
    reset();
  }
  if (botLeft !== undefined && botLeft === midMiddle && botLeft === topRight) {
    alert(`${botLeft} is the winner!`);
    reset();
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    board[i] === undefined ? (boardFull = false) : null;
  }
  if (boardFull === true) {
    alert("Cat's game!");
    reset();
  }
}

function reset() {
  document.getElementsByClassName("row").forEach(element => {
    element.innerText = "";
    element.innerHTML = "";
  });
  board = [];
}
