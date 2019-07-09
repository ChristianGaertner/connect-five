// Create variables for use in our game.
var Game = {};

// Global game config
Game.config = {
  startingPlayer: "black", // Choose 'black' or 'red'.
  takenMsg: "This position is already taken. Please make another choice.",
  drawMsg: "This game is a draw.",
  winMsg: "The winner is: ",
  countToWin: 5,

  // note: board dimensions are zero-indexed
  boardLength: 8,
  boardHeight: 6,
};

// Global Game State
Game.board = [[0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0]];

Game.currentPlayer = Game.config.startingPlayer;
