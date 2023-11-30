import db from "../firestore"; // Adjust the path if your firebase.js file is in a different directory
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const firestoreMethods = {
  async savePlayerData(gameData) {
    try {
      console.log("uspjeh");
      const docRef = await addDoc(collection(db, "players"), gameData);
      localStorage.setItem("thisGameId", docRef.id);
      console.log("Document written with ID: ", docRef.id);
      window.location.reload();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },

  async updateFirestoreDocument(gameData) {
    const docRef = doc(db, "players", localStorage.getItem("thisGameId"));

    try {
      await updateDoc(docRef, {
        "gameData.player1Name.value": gameData.player1Name.value,
        "gameData.player2Name.value": gameData.player2Name.value,
        "gameData.player1Life.value": gameData.player1Life.value,
        "gameData.player2Life.value": gameData.player2Life.value,
        "gameData.player1Score.value": gameData.player1Score.value,
        "gameData.player2Score.value": gameData.player2Score.value,
      });

      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  },
};

export default firestoreMethods;
