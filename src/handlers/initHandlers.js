const initializeMethods = {
  initializeGame() {
    if (!localStorage.getItem("gameData"))
      localStorage.setItem("gameData", JSON.stringify(this.gameData));

    this.thisGameId = localStorage.getItem("thisGameId");
    this.gameData = JSON.parse(localStorage.getItem("gameData"));
  },
  copyToClipboard() {
    const textToCopy = this.fullUrl;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Unable to copy to clipboard", err);
      });
  },
};
export default initializeMethods;
