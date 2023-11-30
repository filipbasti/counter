const scoreMethods = {
  changeLife(player, amount) {
    if (player === "player1") {
      this.gameData.player1Life.value += amount;
    } else {
      this.gameData.player2Life.value += amount;
    }
    if (this.gameData.player1Life.value < 0) {
      this.gameData.player1Life.value = 0;
    }
    if (this.gameData.player2Life.value < 0) {
      this.gameData.player2Life.value = 0;
    }
  },
  changeScore(player, amount) {
    if (player === "player1") {
      this.gameData.player1Score.value += amount;
    } else {
      this.gameData.player2Score.value += amount;
    }
  },
  resetScore() {
    this.gameData.player1Score.value = 0;
    this.gameData.player2Score.value = 0;
  },
};

export default scoreMethods;
