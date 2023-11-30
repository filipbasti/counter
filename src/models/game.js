const position = {
  x: 100,
  y: 100,
  h: 110,
  w: 100,

  color: "black",
};
const gameData = {
  player1Name: {
    value: "",
    position: position,
  },
  player2Name: {
    value: "",
    position: position,
  },
  player1Life: {
    value: 20,
    position: position,
  },
  player2Life: {
    value: 20,
    position: position,
  },
  player1Score: {
    value: 0,
    position: position,
  },
  player2Score: {
    value: 0,
    position: position,
  },
};

export default gameData;
